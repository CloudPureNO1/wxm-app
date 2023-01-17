export  type DisCountType={
    reduce?:string, // eg : 一件减￥31
    gift?:string,  // 赠送一条毛巾
    vouchers?:string // 8.8折，或满200减30
}

export type GoodsType ={
    goodsId:string,
    imgSrc: string;
    title?:string,
    desc?:string,
    introduction: string;
    presentPrice: string;
    originalPrice: string;
    currency?:string,
    discounts?: DisCountType;
  }