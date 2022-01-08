
export interface SaveDataType {
  _id?: string
}

export interface SaveOption {
  byPassValidate?: boolean
}

export interface RootStateType {
  session: {
    currentUser: {
      id: string
    }
  }
}