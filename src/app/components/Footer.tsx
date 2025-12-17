export default function Footer() {
  return (
    <div className="h-screen relative overflow-hidden">
      Footer
      {/* Bottom gradient blob */}
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-200 h-100">
        <div className="absolute bottom-0 left-0 w-75 h-75 bg-yellow-300/40 dark:bg-yellow-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-50 w-75 h-75 bg-red-400/40 dark:bg-red-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-100 w-75 h-75 bg-purple-400/40 dark:bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-150 w-75 h-75 bg-blue-300/40 dark:bg-blue-400/20 rounded-full blur-3xl" />
      </div>
    </div>
  );
}
