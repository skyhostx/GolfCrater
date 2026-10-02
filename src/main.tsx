import React, { Component, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class RootErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public override state: ErrorBoundaryState = {
    hasError: false,
    error: null,
  };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  override componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('GolfCrater Uncaught Error:', error, errorInfo);
  }

  override render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center p-6 font-sans">
          <div className="max-w-md w-full bg-slate-800 border border-slate-700 rounded-2xl p-8 text-center shadow-2xl">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              !
            </div>
            <h1 className="text-xl font-bold text-white mb-2">GolfCrater Marketplace</h1>
            <p className="text-xs text-slate-300 mb-4 leading-relaxed">
              An unexpected application error occurred while loading the view.
            </p>
            {this.state.error && (
              <pre className="text-[11px] text-left bg-slate-950/80 p-3 rounded-lg text-emerald-300 overflow-x-auto mb-6 border border-slate-800 font-mono">
                {this.state.error.message}
              </pre>
            )}
            <div className="flex space-x-3">
              <button
                onClick={() => {
                  window.location.hash = '#/';
                  window.location.reload();
                }}
                className="flex-1 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors cursor-pointer shadow-lg shadow-emerald-900/30"
              >
                Reset & Reload
              </button>
              <button
                onClick={() => {
                  localStorage.removeItem('golfcrater_cart');
                  localStorage.removeItem('golfcrater_orders');
                  window.location.reload();
                }}
                className="py-2.5 px-4 rounded-xl bg-slate-700 hover:bg-slate-600 text-slate-200 text-xs font-semibold transition-colors cursor-pointer"
              >
                Clear Cache
              </button>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <RootErrorBoundary>
        <App />
      </RootErrorBoundary>
    </StrictMode>
  );
} else {
  console.error('Fatal: #root element not found in DOM.');
}
