import { Produto } from '../types/product';

let cachedProdutos: Produto[] | null = null;

async function loadMock(): Promise<Produto[]> {
	if (cachedProdutos) return cachedProdutos;
	try {
		const res = await fetch('/assets/mock.json');
		if (!res.ok) throw new Error('Failed to load mock.json');
		const data = await res.json();
		cachedProdutos = data as Produto[];
		return cachedProdutos;
	} catch (err) {
		console.error('productService.loadMock error', err);
		return [];
	}
}

export async function getProdutos(): Promise<Produto[]> {
	try {
		const mock = await loadMock();
		console.debug('[productService] returning produtos count=', mock.length);
		return await new Promise<Produto[]>((resolve) => {
			setTimeout(() => resolve(mock), 400);
		});
	} catch (err) {
		console.error('productService.getProdutos error:', err);
		return [];
	}
}

export async function getProdutoPorId(id: string): Promise<Produto | undefined> {
	try {
		const mock = await loadMock();
		return await new Promise<Produto | undefined>((resolve) => {
			setTimeout(() => resolve(mock.find((p) => p.id === id)), 300);
		});
	} catch (err) {
		console.error('productService.getProdutoPorId error:', err);
		return undefined;
	}
}

export async function buscarProdutos(query: string): Promise<Produto[]> {
	try {
		const q = (query || '').trim().toLowerCase();
		if (!q) return await getProdutos();
		const mock = await loadMock();
		return await new Promise<Produto[]>((resolve) => {
			setTimeout(() => {
				resolve(
					mock.filter((p) => p.nome.toLowerCase().startsWith(q))
				);
			}, 250);
		});
	} catch (err) {
		console.error('productService.buscarProdutos error:', err);
		return [];
	}
}

const productService = {
	getProdutos,
	getProdutoPorId,
	buscarProdutos,
};

export default productService;