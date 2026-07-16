import Container from "@/components/layout/Container";

export default function Newsletter() {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <div
          className="
            rounded-[36px]
            border
            border-[var(--border)]
            bg-white
            px-8
            py-16
            shadow-sm
            md:px-14
            lg:px-20
          "
        >
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-[var(--primary)]">
              Stay Connected
            </p>

            <h2 className="mt-4 font-serif text-4xl leading-tight text-[var(--text)] md:text-5xl">
              Get the Latest
              <br />
              NatureGren Updates
            </h2>

            <p className="mt-6 text-lg leading-8 text-[var(--text-muted)]">
              Subscribe to receive product launches, sustainable living tips,
              exclusive collections, and special offers.
            </p>

            <form className="mx-auto mt-10 flex max-w-xl flex-col gap-4 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="
                  h-14
                  flex-1
                  rounded-full
                  border
                  border-[var(--border)]
                  px-6
                  outline-none
                  transition
                  focus:border-[var(--primary)]
                "
              />

              <button
                type="submit"
                className="
                  h-14
                  rounded-full
                  bg-[var(--primary)]
                  px-8
                  font-medium
                  text-white
                  transition
                  hover:bg-[var(--primary-hover)]
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