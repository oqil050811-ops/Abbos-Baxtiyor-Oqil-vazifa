import Frame from '../assets/Frame (6).png'

function Bahtiyor() {
  return (
    <div className="min-h-screen bg-[#fdf7ef] text-[#302d2c]">

      <header className="w-full px-8 py-4">
        <nav className="flex items-center justify-between">

          <a href="#" className="text-2xl font-extrabold tracking-tight">
            arcarta
          </a>

          <ul className="hidden items-center gap-7 text-[11px] font-semibold md:flex">
            <li><a href="#" className="hover:text-[#c87545]">What is arcarta?</a></li>
            <li><a href="#" className="hover:text-[#c87545]">Solutions</a></li>
            <li><a href="#" className="hover:text-[#c87545]">Resources</a></li>
            <li><a href="#" className="hover:text-[#c87545]">FAQs</a></li>
            <li><a href="#" className="hover:text-[#c87545]">Contact</a></li>
            <li><a href="#" className="hover:text-[#c87545]">Login</a></li>
          </ul>

          <button className="rounded-full bg-[#c87545] px-6 py-2 text-[11px] font-semibold text-white transition hover:bg-[#ad6035]">
            Get Started
          </button>

        </nav>
      </header>

      <main>

        <section className="mx-auto flex flex-col items-center px-5 pt-20 text-center md:pt-24">

          <div className="flex items-center overflow-hidden rounded-full bg-[#f6ece3] text-[10px]">
            <span className="rounded-full bg-[#f59b87] px-3 py-1 text-white">
              New
            </span>
            <p className="px-4">
              The Art Market Report
            </p>
          </div>

          <h1 className="mt-2 text-6xl font-bold tracking-tight md:text-[60px]">
            Rely on us
          </h1>

          <p className="mt-4 max-w-[430px] text-sm font-medium leading-[22px]">
            Our Customer Due Diligence platform helps you avoid
            fines or losing clients due to AML while protecting you
            from cybercrime.
          </p>

          <button className="mt-3 rounded-full bg-[#c87545] px-6 py-2 text-xs font-semibold text-white transition hover:bg-[#ad6035]">
            Learn More
          </button>

        </section>

        <section className="mx-auto mt-11 flex max-w-[950px] flex-wrap items-center justify-center gap-x-12 gap-y-6 px-5 text-center">

          <h3 className="text-base font-bold">
            COLNAGHI
          </h3>

          <h3 className="text-xs font-medium tracking-[3px]">
            LUXEMBOURG + CO.
          </h3>

          <h3 className="text-xs font-serif">
            TOMASSO BROTHERS
            <span className="block text-[9px]">
              FINE ART
            </span>
          </h3>

          <h3 className="text-sm font-semibold">
            Cristea Roberts Gallery
          </h3>

        </section>

        <div className="mt-8 flex justify-center">
          <a
            href="#"
            className="flex items-center gap-2 text-[10px] font-semibold text-[#c87545] hover:text-[#9e512c]"
          >
            What is arcarta?
            <span className="flex h-3 w-3 items-center justify-center rounded-full bg-[#c87545] text-[9px] text-white">
              +
            </span>
          </a>
        </div>

        <section className="mx-auto mt-16 max-w-[700px] px-5">
          <div className="h-32 rounded-t-2xl bg-gradient-to-b from-[#f8eee3] to-[#fdf7ef]">
          </div>
        </section>

        <img src={Frame} alt="" />

      </main>
    </div>
  )
}

export default Bahtiyor
