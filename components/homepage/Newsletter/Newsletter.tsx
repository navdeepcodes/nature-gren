import Container from "@/components/layout/Container";

export default function Newsletter() {
  return (
    <section className="py-16 lg:py-32">
      <Container>
        <div
          className="
            rounded-[32px]
            border
            border-[var(--border)]
            bg-white
            px-6
            py-10
            shadow-sm
            md:px-10
            md:py-12
            lg:rounded-[36px]
            lg:px-20
            lg:py-16
          "
        >
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-[var(--primary)]">
              Stay Connected
            </p>

            <h2 className="mt-3 font-serif text-3xl leading-tight text-[var(--text)] sm:text-4xl lg:mt-4 lg:text-5xl">
              Get the Latest
              <br />
              NatureGren Updates
            </h2>

            <p className="mt-4 text-base leading-7 text-[var(--text-muted)] lg:mt-6 lg:text-lg lg:leading-8">
              Subscribe to receive product launches, sustainable living tips,
              exclusive collections, and special offers.
            </p>

            <form className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row lg:mt-10 lg:gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="
                  h-12
                  flex-1
                  rounded-full
                  border
                  border-[var(--border)]
                  px-5
                  outline-none
                  transition
                  focus:border-[var(--primary)]
                  lg:h-14
                  lg:px-6
                "
              />

              <button
                type="submit"
                className="
                  h-12
                  w-full
                  rounded-full
                  bg-[var(--primary)]
                  px-8
                  text-sm
                  font-medium
                  text-white
                  transition
                  hover:bg-[var(--primary-hover)]
                  sm:w-auto
                  lg:h-14
                "
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}