import $ from "jquery";

export default class RequestService {

    static DoRequest(requestType = 'GET', url, data = null, contentType = 'application/json; charset=utf-8', dataType = 'json', async = true) {
        return $.ajax({
            type: requestType,
            url: url,
            contentType: contentType,
            data: (data != null) ? data : '',
            dataType: dataType,
            async: async
        });
    }
}