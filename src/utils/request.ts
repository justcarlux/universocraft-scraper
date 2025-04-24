import axios from "axios";
import { HttpsProxyAgent } from "https-proxy-agent";
import { baseURL } from "./constants";

let currentProxy: HttpsProxyAgent<string> | undefined = undefined;

export function setGlobalProxy(proxy: HttpsProxyAgent<string> | undefined | null) {
    currentProxy = proxy ?? undefined;
}

const client = axios.create({
    baseURL
});
export async function proxiedRequest(endpoint: string) {
    const response = await client.get(endpoint, {
        proxy: false,
        httpsAgent: currentProxy
    });
    return response.data as string;
}
