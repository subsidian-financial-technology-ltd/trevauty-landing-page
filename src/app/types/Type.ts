export interface LoginRequest {
    emailAddress: string
    password: string
  }

export interface EmailVerificationRequest {
    emailAddress: string
}

export interface OtpValidationRequest {
  emailAddress: string | null
  verificationCode:string 
}

export interface ContactVerificationResponse {
  code:string
  message:string
}

  
 export interface LoginResponse {
      customerId: string;
      firstName: string;
      lastName: string;
      emailAddress: string;
      phoneNumber: string;
      hasPin: boolean;
      saveCard: boolean;
      enablePush: boolean;
      tier: string;
      country: string;
      accessToken: string;
      refreshToken: string;
  }

  export interface CustomerSignUpRequest {
    emailAddress: String
    username:String
    password: String
    firstName: String
    lastName: String
    phoneNumber: String
    country: String
  }

  export interface CustomerSignUpResponse {
      customerId: string;
      firstName: string;
      lastName: string;
      emailAddress: string;
      phoneNumber: string;
      hasPin: boolean;
      saveCard: boolean;
      enablePush: boolean;
      tier: string;
      country: string;
      accessToken: string;
      refreshToken: string;
  }

  export interface ProductOrder {
    productId: string | null;
    customerId: string;
    status: string | null;
    orderId: string | null;
    productCategory: string | null;
    vendorId: string | null;
    page: number;
    size: number;
  }

  export interface Products {
    // productId: string | null;
    // status: string | null;
    // productCategory: string | null;
    vendorId: string | null;
    page: number;
    size: number;
  }

  export interface ProductOrderStatistics {
    allOrdersCount: number
    processingOrdersCount:number
    cancelledOrdersCount:number
    failedOrdersCount:number
    completedOrdersCount:number
  }

  export interface CardResponse {
    name: String | null;
    cardPan: String
  }


