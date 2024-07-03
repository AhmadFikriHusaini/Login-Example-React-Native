export interface AuthState {
    isLogin: boolean;
    status: 'idle' | 'loading' | 'success' | 'failed';
    error: string | null;
}