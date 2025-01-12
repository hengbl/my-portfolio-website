import { Router } from "next/router";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const PublishPostButton = ({ router }: { router: AppRouterInstance }) => (
    <button
        type="button"
        onClick={() => router.back()}
        className="px-4 py-2 rounded-lg border dark:border-gray-800
        hover:bg-gray-100 dark:hover:bg-gray-800"
    >
        Cancel
    </button>
);

export const CancelPostButton = ({ toDisable }: { toDisable: boolean }) => (
    <button
        type="submit"
        disabled={toDisable}
        className="px-4 py-2 rounded-lg bg-blue-500 text-white
        hover:bg-blue-600 disabled:opacity-50"
    >
        {toDisable ? 'Publishing...' : 'Publish'}
    </button>
);