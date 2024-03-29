import { Doom3Tokenizer } from './Doom3/Doom3Tokenizer';
import { ETokenType } from './Doom3/definitions';
import { HTTPRequest } from './Doom3/HTTPRequest';

async function processHttpResponse() {
    const url = './public/level.proc';
    const { response: data } = await HTTPRequest.getAsync(url);
    const tokenizer = new Doom3Tokenizer();

    tokenizer.setSource(data);

    while (tokenizer.moveNext()) {
        if (tokenizer.current.type === ETokenType.NUMBER) {
            console.log(`NUMBER: ${ tokenizer.current.getFloat() }`);
        } else {
            console.log(`STRING: ${ tokenizer.current.getString() }`);
        }
    }
}

processHttpResponse();