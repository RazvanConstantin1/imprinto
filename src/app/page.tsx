import { Check, Star } from "lucide-react";
import MaxWidthWrapper from "./components/MaxWidthWrapper";
import TShirt from "./components/TShirt";
import { Icons } from "./components/Icons";

export default function Home() {
  return (
    <div className="bg-slate-50">
      <section>
        <MaxWidthWrapper className="pb-24 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-12 lg:pb-52">
          <div className="col-span-2 px-4 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
                Your image on a{" "}
                <span className="bg-orange-600 px-2 text-white">Custom</span>
                <br />
                T-shirt
              </h1>
              <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
                Capture your favourite memories with your own{" "}
                <span className="font-semibold">high-quality</span> T-shirt.
                Imprinto allows you to "wear" your memories everywhere.
              </p>

              <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
                <div className="space-y-2">
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-orange-600" />
                    High-quality, durable material
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-orange-600" />5 year
                    print guarantee
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-orange-600" />
                    Modern style and confortable material
                  </li>
                </div>
              </ul>

              <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <div className="flex -space-x-4">
                  <img
                    src="/users/user-1.png"
                    alt="user image"
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                  />
                  <img
                    src="/users/user-2.png"
                    alt="user image"
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                  />
                  <img
                    src="/users/user-3.png"
                    alt="user image"
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                  />
                  <img
                    src="/users/user-4.jpg"
                    alt="user image"
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                  />
                  <img
                    src="/users/user-5.jpg"
                    alt="user image"
                    className="object-cover inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                  />
                </div>

                <div className="flex flex-col justify-between items-center sm:items-start">
                  <div className="flex gap-0.5">
                    <Star className="h-4 w-4 text-orange-600 fill-orange-600" />
                    <Star className="h-4 w-4 text-orange-600 fill-orange-600" />
                    <Star className="h-4 w-4 text-orange-600 fill-orange-600" />
                    <Star className="h-4 w-4 text-orange-600 fill-orange-600" />
                    <Star className="h-4 w-4 text-orange-600 fill-orange-600" />
                  </div>
                  <p>
                    <span className="font-semibold">1.250+</span> happy
                    customers
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 lg:pt-24 pt-6 h-fit">
            <div className="relative md:max-w-xl ">
              <img
                src="/your-image.png"
                alt=""
                className="absolute w-40 lg:w-52 left-56 -top-24 select-none hidden sm:block"
              />
              <img
                src="/line.png"
                alt=""
                className="absolute w-20 left-10 -bottom-6 select-none"
              />
              <TShirt className="w-[420px]" imgSrc="/testimonials/1.jpg" />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* value proposition section */}
      <section className="bg-slate-100 py-24">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
          <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
            <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
              What our{" "}
              <span className="relative px-2">
                customers{" "}
                <Icons.underline className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-orange-500" />
              </span>{" "}
              say
            </h2>
          </div>
          <div className="mx-auto grid max-w-xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16">
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="flex gap-0.5 mb-2">
                <Star className="h-5 w-5 text-orange-600 fill-orange-600" />
                <Star className="h-5 w-5 text-orange-600 fill-orange-600" />
                <Star className="h-5 w-5 text-orange-600 fill-orange-600" />
                <Star className="h-5 w-5 text-orange-600 fill-orange-600" />
                <Star className="h-5 w-5 text-orange-600 fill-orange-600" />
              </div>
              <div className="text-lg leading-8">
                <p>
                  "I absolutely love the T-shirts I ordered from here! The
                  design tool was so easy to use, and I could personalize every
                  detail to make it my own. My friends were amazed at how unique
                  my shirt looked!{" "}
                  <span className="p-0.5 bg-slate-800 text-white">
                    the image is super clear
                  </span>{" "}
                  Definitely coming back for more."
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <img
                  src="/users/user-1.png"
                  alt="user"
                  className="rounded-full h-12 w-12 object-cover"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Jonathan</p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <Check className="h-4 w-4 stroke-[3px] text-orange-600" />
                    <p className="text-sm">Verified Purchase</p>
                  </div>
                </div>
              </div>
            </div>
            {/* second user review */}
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20 justify-between">
              <div className="flex gap-0.5 mb-2">
                <Star className="h-5 w-5 text-orange-600 fill-orange-600" />
                <Star className="h-5 w-5 text-orange-600 fill-orange-600" />
                <Star className="h-5 w-5 text-orange-600 fill-orange-600" />
                <Star className="h-5 w-5 text-orange-600 fill-orange-600" />
                <Star className="h-5 w-5 text-orange-600 fill-orange-600" />
              </div>
              <div className="text-lg leading-8">
                <p>
                  "I was worried about the quality since it's a personalized
                  shirt, but{" "}
                  <span className="p-0.5 bg-slate-800 text-white">
                    I was blown away!
                  </span>{" "}
                  The fabric is soft and comfortable, and the print is sharp and
                  vibrant. Even after multiple washes, it still looks brand
                  new."
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <img
                  src="/users/user-4.jpg"
                  alt="user"
                  className="rounded-full h-12 w-12 object-cover"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Jake</p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <Check className="h-4 w-4 stroke-[3px] text-orange-600" />
                    <p className="text-sm">Verified Purchase</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
