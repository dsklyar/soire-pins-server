export interface IAppResolver<T> {
	parent: any;
	data: T;
	context: any;
	info: any;
}