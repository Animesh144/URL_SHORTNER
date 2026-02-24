import { QueryClient } from '@tanstack/react-query'
import { Store } from '@reduxjs/toolkit'

declare module '@tanstack/react-router' {
  interface Register {
    routerContext: {
      queryClient: QueryClient
      store: Store
    }
  }
}

