# Angular 17 Learning Project

This project serves as a hands-on guide to understanding Angular's core concepts, component architecture, and best practices. This project uses Angular 17.

## Project Overview

This project demonstrates various Angular 17 features including:
- Standalone Components
- Component Communication
- Services & Dependency Injection
- Forms (Template-driven)
- Routing
- Data Binding
- Directives

## Project Structure

```
src/
├── app/
│   ├── components/         # Reusable components
│   │   ├── counter/       
│   │   ├── greeting/
│   │   └── header/
│   ├── form/              # Form component
│   ├── home/              # Home page component
│   ├── notes/             # Notes feature
│   ├── posts/             # Posts feature
│   ├── services/          # Application services
│   │   ├── counter.service.ts
│   │   ├── note.service.ts
│   │   └── posts.service.ts
│   ├── models/            # Type definitions
│   ├── app.component.ts   # Root component
│   ├── app.routes.ts      # Application routes
│   └── app.config.ts      # Application configuration
├── assets/               # Static assets
└── environments/         # Environment configurations
```

## Getting Started

### Prerequisites
- Node.js (v16 or later)
- npm (comes with Node.js) or Yarn
- Angular CLI (v17 or later)

### Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   ng serve
   ```
4. Open `http://localhost:4200/` in your browser

## Key Features

### 1. Creating Components
Here's how to create a component using Angular CLI

```bash
ng generate component components/component-name
```

or simply

```bash
ng g c components/component-name
```

Example component structure:
```typescript
// component-name.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-component-name',
  standalone: true,
  templateUrl: './component-name.component.html',
  styleUrls: ['./component-name.component.css']
})
export class ComponentNameComponent {
  // Component logic here
}
```

### 2. Creating Services
Here's how to create a service using Angular CLI

```bash
ng generate service services/service-name
```

or simply

```bash
ng g s services/service-name
```

Example service:
```typescript
// services/example.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {
  // Service logic here
}
```

### 3. Component Communication

#### Parent to Child (Input)
```typescript
// parent.component.html
<app-child [data]="parentData"></app-child>

// child.component.ts
@Input() data: any;
```

#### Child to Parent (Output)
```typescript
// child.component.ts
@Output() dataEvent = new EventEmitter<any>();

sendData() {
  this.dataEvent.emit(data);
}

// parent.component.html
<app-child (dataEvent)="handleData($event)"></app-child>
```

## 🎯 Key Concepts Demonstrated

1. **Standalone Components**: Modern Angular 17 standalone components
2. **Dependency Injection**: Services for shared functionality
3. **Data Binding**: One-way and two-way data binding
4. **Directives**: Built-in directives like *ngIf, *ngFor
5. **Forms**: Template-driven forms implementation
6. **Routing**: Navigation between different views

