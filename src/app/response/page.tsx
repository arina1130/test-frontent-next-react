import { Suspense } from "react";
import ResponsePage from "../components/Response";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResponsePage />
    </Suspense>
  );
}
