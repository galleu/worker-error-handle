export async function handle_error(err) {
    let headers = new Headers();
    headers.set("Content-Type", "text/plain");

    if (err.status) {
        let message = err.message || null;
        if (message === null) {
            switch (err.status) {
                case 204: return new Response(null, { status: err.status });
                case 400: message = "Bad Request"; break;
                case 401: message = "Unauthorized"; break;
                case 402: message = "Payment Required"; break;
                case 403: message = "Forbidden"; break;
                case 404: message = "Not Found"; break;
                case 405: message = "Method Not Allowed"; break;
                case 406: message = "Not Acceptable"; break;
                case 408: message = "Request Timeout"; break;
                case 409: message = "Conflict"; break;
                case 410: message = "Gone"; break;
                case 411: message = "Length Required"; break;
                case 413: message = "Payload Too Large"; break;
                case 414: message = "URI Too Long"; break;
                case 415: message = "Unsupported Media Type"; break;
                case 416: message = "Range Not Satisfiable"; break;
                case 417: message = "Expectation Failed"; break;
                case 418: message = "I'm a teapot"; break;
                case 421: message = "Misdirected Request"; break;
                case 422: message = "Unprocessable Entity"; break;
                case 423: message = "Locked"; break;
                case 428: message = "Precondition Required"; break;
                case 429: message = "Too Many Requests"; break;
                case 431: message = "Request Header Fields Too Large"; break;
                case 451: message = "Unavailable For Legal Reasons"; break;
                case 500: message = "Internal Server Error"; break;
                case 501: message = "Not Implemented"; break;
                case 503: message = "Service Unavailable"; break;
                case 504: message = "Gateway Timeout"; break;
                case 505: message = "HTTP Version Not Supported"; break;
                case 506: message = "Variant Also Negotiates"; break;
                case 507: message = "Insufficient Storage"; break;
                case 508: message = "Loop Detected"; break;
                case 510: message = "Not Extended"; break;
                case 511: message = "Network Authentication Required"; break;
                default: message = "HTTP Error Code " + err.status; break;
            }
        };
        console.log("Error", err);
        console.log("Request", err.request)
        return new Response(message, { status: err.status, headers });
    } else {
        return new Response(err.stack, { status: 500, headers });
    }
}
