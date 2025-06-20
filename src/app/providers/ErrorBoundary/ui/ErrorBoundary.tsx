import React, { ErrorInfo, ReactNode, Suspense } from "react";
import { withTranslation } from "react-i18next";
import { PageError } from "widgets/PageError/ui/PageError";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    // Позволяет отобразить запасной UI при следующем рендере
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Логируем ошибку (опционально)
    console.error("Ошибка в компоненте:", error, errorInfo);
    // logErrorToMyService(error, errorInfo); // если хочешь отправлять на сервер
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      // Показываем fallback UI
      return (
        <Suspense fallback=''>
          <PageError />
        </Suspense>
      );
    }

    return children;
  }
}

// export default withTranslation()(ErrorBoundary);
export default ErrorBoundary;
