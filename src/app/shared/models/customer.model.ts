export class Customer {
	constructor(
		public name: string,
		public federalId: string,
		public phone: string,
		public active: boolean,
		public email: string,
		public emailCollection: string,
		public rg?: string,
		public phone2?: string,
		public id?: number,
		public residentialPhone?: string,
		public commercialPhone?: string,
		public emergencyContact?: string,
		public emergencyPhone?: string,
		public federalIdType?: string,
		public commercialAddress?: string,
		public residentialAddress?: string,
		public birthday?: string,
		public gender?: string
		)
	{}
};