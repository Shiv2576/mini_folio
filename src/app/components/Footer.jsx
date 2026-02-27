export default function Footer() {
  return (
    <div className="mt-20 p-4 relative">
      {/* Dashed line at the top of footer */}
      <div className="absolute left-[5%] right-[5%] md:-left-[14%] md:-right-[14%] -top-1 border-t-[1.5px] border-dashed border-[rgb(var(--bc))]" />

      <div className="flex justify-between items-center">
        <p className="text-sm text-[rgb(var(--text-main))]/70">
          © 2025. All rights reserved.
        </p>
      </div>
      <p className="text-xs mt-2 text-[rgb(var(--text-main))]/60">
        This site follows{" "}
        <span className="text-sm font-medium hover:underline cursor-pointer text-[rgb(var(--text-main))] hover:text-[rgb(var(--primary))] transition-colors duration-200">
          True Minimalism
        </span>
      </p>
    </div>
  );
}
