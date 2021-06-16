import { getCabang } from "../auth/AuthData";
import { ProductInventoryRequest } from "../inventory/ProductInventoryRequest";
import { GetProductInventoryResponse } from "../inventory/ProductInventoryResponse";
import { getApi } from "../RemoteData";
import { getProductInventoryApi, productApi } from "../Url";

export function getProductCabang(
    desc: string,
    onSuccess: (response: GetProductInventoryResponse) => void, 
    onError: (error: Response) => void
    ){

    let cabang = getCabang()
    let body: ProductInventoryRequest = {
        cabang: cabang.id,
        desc: desc
    }

    let url = `${getProductInventoryApi}?cabang=${body.cabang}&desc=${body.desc}`

    getApi<ProductInventoryRequest, GetProductInventoryResponse>(url)
    .then((val: GetProductInventoryResponse) => {
        onSuccess(val)
    })
    .catch((response: any) => {
        
        onError(response)
    })
}

export function getProductData(
    desc: string,
    onSuccess: (response: GetProductInventoryResponse) => void, 
    onError: (error: Response) => void
    ){

    let cabang = getCabang()
    let body: ProductInventoryRequest = {
        cabang: cabang.id,
        desc: desc
    }

    let url = `${productApi}`
    url = `${url}?search=${desc}`

    getApi<ProductInventoryRequest, GetProductInventoryResponse>(url)
    .then((val: GetProductInventoryResponse) => {
        onSuccess(val)
    })
    .catch((response: any) => {
        onError(response)
    })
}