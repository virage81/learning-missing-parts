# Код API-клиента с ООП, TypeScript и React

## **1. `src/api/core.ts` — Базовый класс API-клиента**

```typescript
import axios, { AxiosInstance } from "axios";

export class ApiClientCore {
  protected instance: AxiosInstance;

  constructor(baseURL: string) {
    this.instance = axios.create({
      baseURL,
      headers: { "Content-Type": "application/json" },
    });
  }
}
```

## 2. `src/api/products.ts` — Клиент API для товаров

```typescript
import { ApiClientCore } from "./core";

export interface Product {
  id: number;
  title: string;
  price: number;
}

export class ProductsApiClient extends ApiClientCore {
  constructor() {
    super("http://localhost:5000"); // Заглушка для будущего API
  }

  async getProducts(): Promise<Product[]> {
    return Promise.resolve([
      { id: 1, title: "Book 1", price: 10 },
      { id: 2, title: "Book 2", price: 15 },
    ]);
  }

  async addProduct(product: Omit<Product, "id">): Promise<Product> {
    const newProduct = { id: Date.now(), ...product };
    return Promise.resolve(newProduct);
  }
}
```

## 3. `src/App.tsx` — Главный компонент

```typescript
import { useState, useEffect } from "react";
import { ProductsApiClient, Product } from "./api/products";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const apiClient = new ProductsApiClient();

  useEffect(() => {
    apiClient.getProducts().then(setProducts);
  }, []);

  return (
    <div>
      <h1>Магазин</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
```

## Шаги выполнения

1. Создать новый React-проект:
   `npx create-react-app products-api --template typescript && cd products-api `

2. Установить Axios:
   `npm install axios`

3. Добавить файлы API-клиента `(core.ts, products.ts)` в `src/api/`
    1. Обновить App.tsx, чтобы он работал с API-клиентом
    2. Запустить проект:
       `npm start`
    3. Создать репозиторий learning-missing-parts и выложить код в stage-1-frontend/products-api/
    4. Скинуть мне ссылку на репозиторий 🚀