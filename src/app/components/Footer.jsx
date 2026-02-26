export default function Footer() {
  return (
    <div className="mt-20 p-4">
      <div className="flex justify-between items-center">
        <p className="text-sm">© 2025. All rights reserved.</p>
      </div>
      <p className="text-xs mt-2">
        This site follow{" "}
        <span
          target="_blank"
          className="text-sm font-medium hover:underline"
          rel="noopener noreferrer"
        >
          True Minimalism
        </span>{" "}
      </p>
    </div>
  );
}
