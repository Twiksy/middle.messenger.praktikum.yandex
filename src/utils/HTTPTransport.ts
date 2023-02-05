const METHODS = {
	GET: 'GET',
	POST: 'POST',
	PUT: 'PUT',
	DELETE: 'DELETE',
};

type Data<T> = { [x: string]: T; };

type Options = {
	data?: Data<unknown>;
	method?: string;
	headers?: Data<string>;
	timeout?: number;
}


enum errorMessages {
	EmptyMethod = 'Empty Method',
	EmptyUrl = 'Empty Url',
	IsObject = ' data not a object',
	RejectRequest = 'Reject Request',
	RejectError = 'Reject Error',
	RejectTimeout = 'Reject exceeded Timeout'
}

function queryStringify(data: Data<unknown>) {
	if (typeof data !== 'object') {
		throw new Error('Data must be object');
	}

	const keys = Object.keys(data);
	return keys.reduce((result, key, index) => {
		return `${result}${key}=${data[key]}${index < keys.length - 1 ? '&' : ''}`;
	}, '?');
}

class HTTPTransport {
	get = (url: string | URL, options = {}) => {
		return this.request(url, { ...options, method: METHODS.GET }, options?.timeout);
	};

	post = (url: string | URL, options = {}) => {
		return this.request(url, { ...options, method: METHODS.POST }, options?.timeout);
	};

	put = (url: string | URL, options = {}) => {
		return this.request(url, { ...options, method: METHODS.PUT }, options?.timeout);
	};

	delete = (url: string | URL, options = {}) => {
		return this.request(url, { ...options, method: METHODS.DELETE }, options?.timeout);
	};

	request = (url: string | URL, options: Options, timeout = 5000) => {
		const { headers = {}, method, data } = options;

		return new Promise(function (resolve, reject) {
			if (!method) {
				reject(errorMessages.EmptyMethod);
				return;
			}
			if (!url) {
				reject(errorMessages.EmptyUrl);
				return;
			}

			const xhr = new XMLHttpRequest();
			const isGet = method === METHODS.GET;

			xhr.open(
				method,
				isGet && !!data
					? `${url}${queryStringify(data)}`
					: url,
			);

			Object.keys(headers).forEach(key => {
				xhr.setRequestHeader(key, headers[key]);
			});

			xhr.onload = function () {
				resolve(xhr);
			};

			xhr.onabort = reject(errorMessages.RejectRequest);
			xhr.onerror = reject(errorMessages.RejectError);

			xhr.timeout = timeout;
			xhr.ontimeout = reject(errorMessages.RejectTimeout);

			if (isGet || !data) {
				xhr.send();
			} else {
				// @ts-ignore
				xhr.send(data);
			}
		});
	};
}

const customFetch = new HTTPTransport();

export default customFetch;
