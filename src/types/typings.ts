export interface IUserResponse {
  total_pages: number;
  users: IUserObj[];
}

export interface IUserObj {
  email: string;
  id: number;
  name: string;
  phone: string;
  photo?: string;
  position: string;
  position_id?: number;
  registration_timestamp?: number;
}

export interface IUserPage {
  currentPage: number;
  totalPages: number;
}

export interface IPositionsResponse {
  positions: [IPositions];
  success: boolean;
}

export interface IPositions {
  id: number;
  name: string;
}

export type FormValues = {
  name: string;
  email: string;
  phone: string;
  position_id: string;
  image: File[];
};
