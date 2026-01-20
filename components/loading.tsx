
export default function Loading() {
  return (
    <div style={{
      background: "linear-gradient(to bottom, #69001A, #E00047, #69001A)",
    }} className="w-full h-[100vh] flex flex-col justify-center items-center gap-4 max-sm:pb-12">
      <div className="loader"></div>
    </div>
  )
}