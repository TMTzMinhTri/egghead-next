import {Widget} from '@typeform/embed-react'
import Link from 'next/link'
import Image from 'next/legacy/image'
import Layout from 'components/app/layout'
import {NextSeo} from 'next-seo'
import analytics from 'utils/analytics'

const EggheadForTeams = () => {
  return (
    <>
      <header className="flex flex-col items-center text-center max-w-2xl mx-auto w-full pb-24 sm:pt-16 pt-5 px-5">
        <Image
          src="https://res.cloudinary.com/dg3gyk0gu/image/upload/v1682701917/eggodex/egh_climbers.png"
          alt="egghead for teams"
          width={800 / 2.6}
          height={844 / 2.6}
          priority
        />
        <h1 className="sm:text-4xl text-3xl font-bold mt-5 leading-tight">
          egghead for Teams
        </h1>
        <h2 className="sm:text-lg pt-4 text-amber-600 dark:text-amber-300">
          Keeping your team up to date and consistent with the application of
          frameworks, patterns, and best practices is an ongoing and extreme
          challenge for any organization.
        </h2>
        <hr className="border dark:border-gray-700 border-gray-300 w-5 mt-10" />
      </header>
      <main>
        <article className="prose sm:prose-lg dark:prose-dark max-w-2xl mx-auto w-full px-5">
          <p>
            The pressure is always on to SHIP, which means that we have to make
            trade-offs in terms of how we spend our time. When the ongoing
            education and upskilling of your team is neglected the long-term
            consequences can be massive... and expensive.
          </p>
          <p>
            On the flip side of that coin, when continued education and
            upskilling is a priority, the long-term consequences can still be
            massive, but instead of a massive expense, you will see a massive
            ROI.
          </p>
          <p className="font-semibold">
            Access to high-quality learning material, and the space to learn, is
            essential for the developers on your team.
          </p>
          <ul>
            <li>high quality product development</li>
            <li>consistent shared knowledge and understanding of tools</li>
            <li>alignment on best practices</li>
            <li>similar basis for understanding around "how we got here"</li>
          </ul>
          <p>
            egghead has been providing developers with efficient, in-depth, to
            the point courses for over a decade. Trusted by enterprises like
            Microsoft, Apple, Facebook, Google, Goldman-Sachs, Sony, Epic Games,
            and countless others large and small, your developers skillup with
            egghead so you can ship better products, faster, and more
            consistently over time.
          </p>
          <section
            aria-label="Enterprises using egghead"
            className="flex flex-col items-center py-10 -mx-10"
          >
            <span className="text-sm font-mono uppercase pb-8 dark:text-gray-300">
              Trusted by enterprises
            </span>
            <div className="grid lg:grid-cols-6 grid-cols-3 gap-5 place-items-center">
              <Apple />
              <Sony />
              <Facebook />
              <GoldmanSachs />
              <EpicGames />
              <Microsoft />
            </div>
          </section>
          <p>
            In addition to your deep egghead course catalog, we can also offer
            your team custom learning paths and are happy to discuss the
            learning content your organization wants to see.
          </p>
          <p className="text-center sm:text-xl text-lg font-semibold sm:py-10 py-5">
            Do you need live workshops? We can do that.
          </p>
          <p>
            egghead's deep bench of experienced instructors are here to help you
            meet your education goals and provide your team with the support you
            need.
          </p>
        </article>
        <section className="flex flex-col items-center sm:pt-24 pt-16 pb-10 w-full h-full bg-gray-100 dark:bg-gray-800/50 mt-16">
          <h2 className="sm:text-3xl text-2xl font-bold">
            Ready to get started?
          </h2>
          <h3 className="sm:text-lg pt-2 dark:text-gray-300 text-gray-700">
            Contact us to discuss your team's needs:
          </h3>
          <div className="sm:aspect-[16/9] aspect-[1/1.4] max-w-4xl mx-auto w-full mt-10">
            <Widget
              id="JWBc8Ohx"
              style={{width: '100%', height: '100%'}}
              className="my-form"
            />
          </div>
        </section>
        <section className="flex flex-col items-center sm:pb-32 pb-16 w-full h-full dark:bg-gray-800/50 bg-gray-100">
          <span className="pb-10 dark:text-gray-300 text-gray-700">or</span>
          <Link
            passHref
            onClick={() => {
              analytics.events.activityInternalLinkClick(
                'CTA',
                'browser page',
                'egghead for teams',
                '/pricing',
              )
            }}
            href="/pricing"
          >
            <a className="bg-gradient-to-b from-amber-300 to-amber-400 text-black rounded-md px-8 py-3 font-medium text-lg dark:border border-amber-500/50 hover:brightness-110 transition shadow-2xl shadow-amber-300/20">
              Join Today
            </a>
          </Link>
        </section>
      </main>
    </>
  )
}

EggheadForTeams.getLayout = (Page: any, pageProps: any) => {
  return (
    <Layout>
      <NextSeo
        title="egghead For Teams"
        description="Keeping your team up to date and consistent with the application of frameworks, patterns, and best practices is an ongoing and extreme challenge for any organization."
        canonical={`${process.env.NEXT_PUBLIC_DEPLOYMENT_URL}/egghead-for-teams`}
        openGraph={{
          url: `${process.env.NEXT_PUBLIC_DEPLOYMENT_URL}/egghead-for-teams`,
          site_name: 'egghead',
          images: [
            {
              url: 'https://res.cloudinary.com/dg3gyk0gu/image/upload/v1683186390/egghead-for-teams-card_2x.png',
              width: 1200,
              height: 630,
              alt: 'egghad For Teams',
            },
          ],
        }}
      />

      <Page {...pageProps} />
    </Layout>
  )
}

export default EggheadForTeams

const Apple = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-14"
      viewBox="0 0 48 48"
    >
      <title>Apple</title>
      <g fill="currentColor">
        <path
          fill="currentColor"
          d="M42.998,35.227c-1.039,2.301-1.535,3.328-2.873,5.361c-1.864,2.839-4.494,6.375-7.753,6.405 c-2.895,0.027-3.639-1.884-7.569-1.861S20.054,47.027,17.159,47c-3.259-0.029-5.749-3.222-7.615-6.063 c-5.216-7.94-5.761-17.257-2.544-22.21c2.286-3.522,5.894-5.58,9.285-5.58c3.453,0,5.624,1.893,8.48,1.893 c2.77,0,4.457-1.896,8.45-1.896c3.018,0,6.216,1.643,8.495,4.482C34.243,21.717,35.457,32.376,42.998,35.227L42.998,35.227z"
        />
        <path d="M30.607,8.176C32.058,6.314,33.158,3.687,32.758,1c-2.37,0.162-5.14,1.67-6.758,3.635 c-1.469,1.783-2.682,4.428-2.21,6.999C26.375,11.715,29.052,10.17,30.607,8.176L30.607,8.176z" />
      </g>
    </svg>
  )
}
const Sony = () => {
  return (
    <svg
      className="w-24"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0.996 1 498.004 87.678"
    >
      <title>Sony</title>
      <path
        fill="currentColor"
        d="M178.416 88.677c-18.04 0-34.786-5.41-45.964-15.443-8.445-7.58-12.503-17.876-12.503-28.473 0-10.468 4.233-20.835 12.502-28.375C142.832 6.925 161.16 1 178.416 1c19.096 0 34.38 4.81 46.064 15.412 8.313 7.544 12.332 17.865 12.332 28.35 0 10.163-4.265 20.986-12.332 28.472-10.88 10.098-27.978 15.443-46.064 15.443V77.113c9.575 0 18.457-3.306 24.66-9.478 6.16-6.13 9.03-13.665 9.03-22.874 0-8.822-3.096-17.07-9.03-22.92-6.12-6.028-15.214-9.42-24.66-9.42-9.475 0-18.575 3.357-24.7 9.42-5.902 5.848-9.006 14.12-9.006 22.92 0 8.773 3.14 17.04 9.006 22.875 6.13 6.098 15.198 9.478 24.7 9.478v11.564zM46.562 1.042c-9.65 0-20.613 1.805-29.928 5.965C8.037 10.843 1 17.047 1 27.332.996 36.595 6.883 42.02 6.723 41.87c2.504 2.305 6.535 6.23 17.074 8.535 4.71 1.03 14.78 2.612 24.808 3.66 9.954 1.05 19.75 2.048 23.74 3.058 3.17.807 8.495 1.906 8.495 7.88 0 5.95-5.61 7.766-6.585 8.16-.974.385-7.704 3.473-19.802 3.473-8.932 0-19.67-2.686-23.584-4.086-4.512-1.606-9.245-3.73-13.66-9.123-1.098-1.337-2.83-5.014-2.83-8.655H3.43v30.68H15.6v-4.145c0-.472.59-2.413 2.633-1.49 2.542 1.155 10.004 4.126 17.806 5.755 6.397 1.338 10.522 2.297 18.475 2.297 12.976 0 19.947-2.114 24.766-3.49 4.54-1.3 10.15-3.634 14.707-7.268 2.468-1.965 7.88-7.002 7.88-16.145 0-8.776-4.71-14.223-6.367-15.88-2.257-2.258-5.014-4.008-7.887-5.357-2.503-1.178-6.453-2.593-9.685-3.384-6.273-1.54-20.457-3.44-27.24-4.15-7.113-.743-19.452-1.765-24.38-3.29-1.494-.463-4.54-1.914-4.54-5.45 0-2.515 1.393-4.647 4.146-6.37 4.37-2.738 13.197-4.44 22.398-4.44 10.878-.04 20.09 2.447 25.95 5.067 1.993.89 4.325 2.168 6.177 3.68 2.09 1.704 5.024 5.245 6.085 10.184h9.83V4.87H85.378v3.104c0 1.002-1.035 2.304-2.992 1.228-4.912-2.577-18.8-8.137-35.826-8.16m240.536 4.853l53.542 48.32-.55-32.533c-.054-4.266-.84-6.047-5.454-6.047h-10.067V5.903h45.78v9.732h-9.82c-4.706 0-5.003 1.505-5.06 6.047l.83 62.163h-15.678l-61.67-55.04.013 39.062c.054 4.246.253 6.246 4.628 6.246h10.995v9.728h-44.96v-9.727h10.51c3.926 0 3.77-3.743 3.77-6.468V22.052c0-2.943-.413-6.41-6.577-6.41H248.8V5.895zm135.564 68.2c.43 0 2.34-.055 2.71-.168a3.358 3.358 0 0 0 2.106-1.87c.14-.33.21-1.79.21-2.107l.008-15.38c0-.37-.027-.53-.655-1.354-.69-.9-28.045-31.9-29.297-33.265-1.555-1.695-4.285-4.315-8.433-4.315h-9.513V5.9h53.687v9.724h-6.472c-1.497 0-2.492 1.42-1.213 2.998 0 0 18.063 21.607 18.234 21.833.168.23.312.285.542.075.226-.215 18.516-21.71 18.66-21.88.87-1.042.28-3.015-1.595-3.015H455V5.9h44v9.735h-9.83c-3.566 0-5.017.66-7.7 3.693-1.227 1.388-28.874 32.945-29.626 33.8-.394.447-.36 1.07-.36 1.44v15.378c0 .312.07 1.774.21 2.102a3.349 3.349 0 0 0 2.11 1.87c.37.114 2.254.17 2.683.17h10.055v9.734h-53.41v-9.735l9.53.008z"
      />
    </svg>
  )
}

const Facebook = () => {
  return (
    <svg
      viewBox="0 0 62.488 12.094"
      className="w-24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Facebook</title>
      <g transform="matrix(0.076238, 0, 0, 0.076238, -9.869545, -16.954924)">
        <path
          d="M 193.587 247.245 C 183.937 247.245 181.147 251.525 181.147 260.965 L 181.147 276.625 L 206.887 276.625 L 204.307 301.925 L 181.157 301.925 L 181.157 378.705 L 150.267 378.705 L 150.267 301.925 L 129.457 301.925 L 129.457 276.625 L 150.267 276.625 L 150.267 261.395 C 150.267 235.875 160.557 222.395 189.267 222.395 C 195.283 222.381 201.295 222.738 207.267 223.465 L 207.267 247.275 Z"
          fill="currentColor"
        />
        <path
          d="M 209.027 324.445 C 209.027 295.925 222.537 274.445 250.847 274.445 C 266.287 274.445 275.717 282.385 280.227 292.245 L 280.227 276.625 L 309.817 276.625 L 309.817 378.705 L 280.227 378.705 L 280.227 363.265 C 275.937 373.135 266.287 380.855 250.847 380.855 C 222.537 380.855 209.027 359.405 209.027 330.855 Z M 239.907 331.315 C 239.907 346.535 245.477 356.615 259.847 356.615 C 272.507 356.615 278.937 347.395 278.937 332.815 L 278.937 322.565 C 278.937 307.985 272.507 298.765 259.847 298.765 C 245.477 298.765 239.907 308.845 239.907 324.065 Z"
          fill="currentColor"
        />
        <path
          d="M 374.157 274.475 C 386.157 274.475 397.527 277.055 403.747 281.335 L 396.887 303.215 C 390.453 300.151 383.423 298.539 376.297 298.495 C 359.567 298.495 352.297 308.145 352.297 324.665 L 352.297 330.665 C 352.297 347.185 359.587 356.835 376.297 356.835 C 383.423 356.79 390.453 355.179 396.887 352.115 L 403.747 373.985 C 397.527 378.275 386.167 380.855 374.157 380.855 C 337.907 380.855 321.397 361.335 321.397 330.025 L 321.397 325.305 C 321.397 293.995 337.907 274.475 374.157 274.475 Z"
          fill="currentColor"
        />
        <path
          d="M 407.817 331.565 L 407.817 322.565 C 407.817 293.615 424.327 274.565 458.007 274.565 C 489.747 274.565 503.687 293.865 503.687 322.175 L 503.687 338.475 L 438.687 338.475 C 439.337 352.415 445.557 358.635 462.687 358.635 C 474.277 358.635 486.497 356.275 495.507 352.415 L 501.157 373.565 C 493.007 377.865 476.277 381.075 461.487 381.075 C 422.397 381.065 407.817 361.565 407.817 331.565 Z M 438.697 318.265 L 476.017 318.265 L 476.017 315.695 C 476.017 304.545 471.517 295.695 458.017 295.695 C 444.067 295.705 438.697 304.505 438.697 318.225 Z"
          fill="currentColor"
        />
        <path
          d="M 618.157 330.885 C 618.157 359.405 604.437 380.885 576.157 380.885 C 560.717 380.885 549.997 373.165 545.707 363.295 L 545.707 378.735 L 516.547 378.735 L 516.547 225.365 L 547.427 222.565 L 547.427 290.765 C 551.927 281.765 561.797 274.465 576.167 274.465 C 604.477 274.465 618.167 295.915 618.167 324.465 Z M 587.277 323.805 C 587.277 309.435 581.707 298.715 566.907 298.715 C 554.247 298.715 547.387 307.715 547.387 322.305 L 547.387 333.025 C 547.387 347.605 554.247 356.615 566.907 356.615 C 581.707 356.615 587.277 345.895 587.277 331.525 Z"
          fill="currentColor"
        />
        <path
          d="M 628.487 330.235 L 628.487 325.095 C 628.487 295.705 645.217 274.475 679.317 274.475 C 713.417 274.475 730.157 295.705 730.157 325.095 L 730.157 330.235 C 730.157 359.615 713.427 380.855 679.327 380.855 C 645.227 380.855 628.487 359.615 628.487 330.235 Z M 699.267 322.945 C 699.267 309.435 693.687 298.715 679.267 298.715 C 664.847 298.715 659.317 309.435 659.317 322.945 L 659.317 332.385 C 659.317 345.895 664.897 356.615 679.267 356.615 C 693.637 356.615 699.267 345.895 699.267 332.385 Z"
          fill="currentColor"
        />
        <path
          d="M 740.427 330.235 L 740.427 325.095 C 740.427 295.705 757.157 274.475 791.257 274.475 C 825.357 274.475 842.087 295.705 842.087 325.095 L 842.087 330.235 C 842.087 359.615 825.357 380.855 791.257 380.855 C 757.157 380.855 740.427 359.615 740.427 330.235 Z M 811.207 322.945 C 811.207 309.435 805.627 298.715 791.257 298.715 C 776.887 298.715 771.317 309.435 771.317 322.945 L 771.317 332.385 C 771.317 345.895 776.887 356.615 791.257 356.615 C 805.627 356.615 811.207 345.895 811.207 332.385 Z"
          fill="currentColor"
        />
        <path
          d="M 884.547 325.305 L 914.997 276.625 L 947.807 276.625 L 915.857 327.025 L 949.097 378.705 L 916.287 378.705 L 884.547 328.705 L 884.547 378.705 L 853.657 378.705 L 853.657 225.365 L 884.547 222.565 Z"
          fill="currentColor"
        />
      </g>
    </svg>
  )
}

const GoldmanSachs = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-28"
      viewBox="0 0 120 60"
    >
      <title>Goldman Sachs</title>
      <path
        d="M101.282 28.61H97.5V13.7h3.56v1.67c.445-1.002 1.558-1.89 3.004-2.003 2.448-.11 4.117 1.336 4.117 4.45v10.792h-3.9V17.37c0-1.336 0-2.448-.9-2.67-.334-.11-.9 0-1.336.333-.555.557-.78 1.225-.78 2.337v11.237zM36.97 14.7c-.9-.78-2.003-1.336-3.34-1.336s-2.336.557-3.338 1.336c-1.558 1.336-2.56 3.783-2.56 6.453 0 2.782 1 5.118 2.56 6.453 1.002.78 2.003 1.336 3.338 1.336s2.448-.555 3.34-1.336c1.67-1.336 2.56-3.672 2.56-6.453 0-2.67-.9-5.118-2.56-6.453zm-1.446 6.453c0 2.782 0 5.007-.446 6.12-.333.555-.66.9-1.446.9-.66 0-1.112-.334-1.336-.9-.557-1.113-.557-3.34-.557-6.12 0-2.67 0-5.007.557-6.12.223-.555.66-.9 1.336-.9.78 0 1.113.334 1.447.9.557 1.113.446 3.45.446 6.12zM75.8 34.284v4.005h-.778c-.445-1.668-1.113-3.108-2.893-3.227-1.113-.11-2.114.557-2.226 1.558s.223 1.89 2.226 3.004c2.56 1.447 4.562 2.114 4.562 5.118 0 3.227-2.782 4.784-5.118 4.784h-4.45v-5.564h.78c.557 2.893 1.447 4.673 3.56 4.784 1.336 0 2.336-.78 2.336-2.225s-.9-2.337-3.004-3.56c-2.336-1.446-3.783-2.336-3.783-4.34 0-2.67 1.892-4.34 4.896-4.34h3.9zm4.897-5.675V17.817c0-3.116-1.67-4.562-4.117-4.45-1.67.11-2.67 1.225-3.116 2.114-.555-1.558-1.78-2.225-3.56-2.114-1.445.11-2.56 1.002-3.004 2.003v-1.67h-3.45v14.9h3.782V17.374c0-1.113.11-1.78.78-2.337.446-.333.89-.444 1.223-.333.9.223.9 1.336.9 2.67V28.61H73.9V17.26c0-1.002.222-1.67.78-2.226.445-.333.9-.444 1.223-.333.9.223 1 1.336 1 2.67V28.6h3.783zM42.1 10.583h3.9v18.024h-3.9V10.583zM59.78 28.61V10.585h-3.9v4.228c-.333-.78-1.113-1.336-2.225-1.336-2.782 0-5.007 2.893-5.118 7.343-.11 3.004.89 8.01 4.784 8.01 1.557 0 2.448-.9 2.782-1.67v1.447h3.672zm-4.562-13.685c.78 1.113.78 3.782.78 5.896 0 2.225.11 5.118-.78 6.342-.334.446-.66.66-1.223.66-.78 0-1.225-.9-1.446-2.336-.112-1.336-.112-3.004-.112-4.784 0-3.004.223-6.342 1.67-6.342.557 0 .78.223 1.113.557zm37.052-.78c1 .557 1.67 1.447 1.67 3.45V28.61h-3.672V26.94c-.445 1.223-1.67 2.002-3.34 2.002-1.336 0-3.672-.66-3.672-4.117 0-3.227 2.114-3.9 4.45-4.895 2.114-.9 2.336-1.002 2.336-1.89v-2.448c0-1-.555-1.446-1.67-1.446-.445.11-1.223.334-1.223.9-.112.66.66.66.78 1.67.11 1.558-1.113 2.113-2.225 2.002-.78 0-1.67-.445-1.78-1.668-.11-2.003 2.114-3.672 5.223-3.672 1.447 0 2.337.334 3.116.78zm-2.226 5.563l-1.223.78c-1.223.78-1.447 1.78-1.558 2.893-.11.9-.11 1.67 0 3.004.11 1.223.89 1.447 1.558 1.223.78-.334 1.223-1.78 1.223-3.34v-4.562zm-52.85 15.244c1.002.66 1.557 1.447 1.557 3.45v11.128h-3.56v-1.67c-.445 1.113-1.668 1.89-3.34 1.89-1.446 0-3.672-.557-3.672-4.005 0-3.227 2.114-3.9 4.34-4.895s2.446-1.113 2.446-1.89V36.51c0-1.113-.557-1.557-1.668-1.446-.446 0-1.225.223-1.225.78-.11.78.66.78.78 1.78.112 1.447-1.113 2.003-2.225 2.003-.78-.11-1.67-.555-1.78-1.78-.11-1.89 2.114-3.56 5.223-3.56 1.447 0 2.336.223 3.116.66zm-2.226 5.563l-1.223.78c-1.223.78-1.446 1.78-1.558 2.893-.11.89-.11 1.78 0 3.004 0 1.336.78 1.557 1.447 1.223.89-.334 1.336-1.668 1.336-3.338v-4.562zm29.152-1.78c0-3.116-1.67-4.673-4.117-4.45-1.223.11-2.225.66-2.782 1.447v-4.34H53.44v10.237c0 3.783-2.67 7.343-5.34 7.232-1.89 0-2.337-1.446-2.56-3.004-.334-2.226-.334-4.784-.112-7.566.223-1.78.66-3.227 2.003-3.227 1.002 0 1.113.66.66 1.113-.446.557-1.113 1.113-.78 2.337.333 1.336 2.446 1.557 3.45.557.78-.89.66-2.337.11-3.227-.66-1.113-1.78-1.557-3.45-1.557-2.114 0-6.12 1.89-6.12 7.9 0 6.453 4.117 7.565 6.453 7.565 2.67 0 5.007-2.337 5.674-4.228v4.007h3.783V38.292c0-1.113.223-1.78.78-2.337.446-.333 1.002-.445 1.336-.333.89.222.89 1.336.89 2.67V49.53h3.9V38.737zM25.176 10.25v6.342h-.78c-.66-3.116-2.114-5.452-4.117-5.563-1.336-.11-2.113.66-2.782 1.78-.66 1.336-1.002 4.117-1.002 7.454 0 3.116.112 5.452.446 7.12.222.78.78 2.003 2.225 2.003.78 0 1.336-.223 1.67-.66.557-.66.66-2.003.66-2.893V22.83c0-1.113-.334-1.78-.89-2.114-.445-.223-1.113-.223-1.446-.334v-.78h6.23v15.9h-.78C24.28 34.29 24.057 33.4 23.5 32.4s-1.558-2.113-3.227-2.113c-1.78-.112-3.116 1.002-3.116 2.67 0 2.226 1.336 2.782 3.783 4.117 2.337 1.336 5.34 2.448 5.34 6.343 0 3.783-3.227 6.12-6.898 6.12h-5.898v-7.67h.78c1.002 5.785 3.45 6.787 5.118 6.787 2.114 0 3.108-1.336 3.108-3.227-.11-2.448-1.785-3.34-4.117-4.562-3.338-1.89-4.895-2.782-4.895-5.898.11-2.67 2.226-4.34 4.562-5.007-4.895-.557-6.342-5.007-6.23-9.786 0-4.784 2.782-9.903 8.233-9.903h5.118z"
        fill="currentColor"
        fill-rule="evenodd"
      />
    </svg>
  )
}

const EpicGames = () => {
  return (
    <svg
      className="w-16"
      viewBox="0 0 32 32"
      version="1.1"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <title>Epic Games</title>
      <path
        fill="currentColor"
        d="M6,2h20c2.2,0,4,1.8,4,4v20c0,2.2-1.8,4-4,4H6c-2.2,0-4-1.8-4-4V6C2,3.8,3.8,2,6,2z"
      />
      <g className="dark:invert">
        <path
          fill="#fff"
          d="M19.9,7.2c0-0.2,0-0.5,0.1-0.7c0.1-0.9,0.6-1.4,1.5-1.5c0.6-0.1,1.3-0.1,2,0c0.9,0.1,1.4,0.7,1.5,1.7   c0,0.8,0,1.7,0,2.5c0,0,0,0,0,0.1h-1.6c0-0.1,0-0.2,0-0.2c0-0.6,0-1.3,0-1.9c0-0.4-0.1-0.6-0.4-0.7c-0.2,0-0.5,0-0.8,0   c-0.3,0-0.4,0.2-0.4,0.5c0,0.1,0,0.2,0,0.3c0,2.3,0,4.6,0,6.8c0,0.1,0,0.2,0,0.3c0,0.3,0.2,0.5,0.5,0.5c0.2,0,0.4,0,0.5,0   c0.3,0,0.5-0.2,0.5-0.5c0-0.1,0-0.3,0-0.4c0-0.7,0-1.3,0-2c0-0.1,0-0.2,0-0.2h1.6c0,0.1,0,0.1,0,0.2c0,0.9,0,1.7,0,2.6   c0,0.2,0,0.4-0.1,0.7c-0.2,0.6-0.6,1.1-1.2,1.2c-0.7,0.1-1.5,0.1-2.2,0c-0.8-0.1-1.3-0.7-1.4-1.5c0-0.2,0-0.5,0-0.7   C19.9,11.8,19.9,9.5,19.9,7.2L19.9,7.2z"
        />

        <path fill="#fff" d="M17.3,5H19v11.4h-1.6V5z" />

        <path
          fill="#fff"
          d="M17.4,19.2h0.9v3.3h-0.9v-1.9l-0.1,0c-0.3,0.4-0.5,0.8-0.8,1.3c-0.3-0.4-0.6-0.9-0.8-1.3h-0.1v1.9h-0.8v-3.3   h0.9c0.3,0.4,0.5,0.8,0.8,1.3C16.9,20,17.1,19.6,17.4,19.2L17.4,19.2z"
        />

        <path
          fill="#fff"
          d="M7.1,5h3.7l0,1.6H8.8v3.2h2v1.5h-2v3.4h2.1v1.5H7.1L7.1,5z"
        />

        <path
          fill="#fff"
          d="M10.3,22.1c-0.4,0.3-0.8,0.5-1.3,0.5c-0.9,0-1.7-0.4-1.9-1.4c-0.2-1.3,0.7-2.1,1.7-2.1c0.4,0,0.9,0.1,1.2,0.3   c0.1,0,0.1,0.1,0.2,0.1C10,19.8,9.8,20,9.6,20.2c-0.3-0.2-0.7-0.4-1.1-0.2C8.3,20,8.2,20.1,8,20.3c-0.3,0.4-0.2,1,0.1,1.3   c0.3,0.3,0.9,0.3,1.2,0.1v-0.4H8.8v-0.7h1.5L10.3,22.1L10.3,22.1z"
        />

        <path
          fill="#fff"
          d="M18.8,27.3c-0.9,0.3-1.8,0.6-2.7,0.9c-0.1,0-0.2,0-0.4,0c-1.4-0.5-2.9-1-4.3-1.5c0,0-0.1,0-0.2-0.1h9.4v0   C20.1,26.9,19.5,27.1,18.8,27.3L18.8,27.3z"
        />

        <path
          fill="#fff"
          d="M21.8,22.5h-2.7v-3.3h2.6v0.7h-1.8v0.6h1.6v0.7h-1.6v0.6h1.8V22.5z"
        />

        <path
          fill="#fff"
          d="M24.5,22.4c-0.6,0.4-1.9,0.2-2.4-0.3c0.2-0.2,0.3-0.4,0.5-0.6c0.3,0.2,0.6,0.4,1,0.4c0.1,0,0.2,0,0.3,0   c0.1,0,0.1-0.1,0.2-0.2c0-0.1-0.1-0.2-0.1-0.2c-0.2-0.1-0.3-0.1-0.5-0.2c-0.2-0.1-0.4-0.1-0.6-0.2c-0.3-0.1-0.5-0.3-0.6-0.7   c0-0.4,0.1-0.8,0.4-1c0.4-0.3,0.9-0.3,1.4-0.2c0.3,0.1,0.6,0.2,0.8,0.4c-0.1,0.2-0.3,0.4-0.4,0.6c-0.3-0.1-0.6-0.2-0.9-0.3   c-0.1,0-0.2,0-0.2,0c-0.1,0-0.2,0.1-0.2,0.2c0,0.1,0.1,0.2,0.1,0.2c0.2,0.1,0.4,0.1,0.6,0.2c0.2,0.1,0.4,0.1,0.6,0.2   c0.3,0.1,0.5,0.4,0.5,0.8C25,21.9,24.9,22.2,24.5,22.4L24.5,22.4z"
        />

        <path
          fill="#fff"
          d="M16.5,6.8c0-0.5-0.2-1.1-0.6-1.4C15.5,5.1,15.1,5,14.7,5c-0.9,0-1.8,0-2.7,0c-0.1,0-0.2,0-0.2,0v11.3h1.7v-4.1   c0.1,0,0.2,0,0.3,0c0.4,0,0.8,0,1.2,0c0.9-0.1,1.5-0.7,1.5-1.6C16.5,9.3,16.5,8.1,16.5,6.8L16.5,6.8z M14.8,10.2   c0,0.3-0.2,0.5-0.5,0.5c-0.3,0-0.6,0-0.9,0V6.6c0.3,0,0.6,0,0.8,0c0.3,0,0.5,0.2,0.5,0.6C14.8,8.2,14.8,9.2,14.8,10.2z"
        />

        <path
          fill="#fff"
          d="M12.9,19.2h-0.8c-0.5,1.1-0.9,2.2-1.4,3.4h0.9c0.1-0.2,0.2-0.4,0.2-0.6h1.4c0.1,0.2,0.2,0.4,0.3,0.6h0.9   C13.9,21.4,13.4,20.3,12.9,19.2L12.9,19.2z M12.1,21.2c0.1-0.3,0.3-0.6,0.4-1c0.1,0.4,0.3,0.7,0.4,1H12.1z"
        />
      </g>
    </svg>
  )
}

const Microsoft = () => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 337.6 72"
      className="w-28"
    >
      <title>Microsoft</title>
      <path
        fill="currentColor"
        d="M140.4,14.4v43.2h-7.5V23.7h-0.1l-13.4,33.9h-5l-13.7-33.9h-0.1v33.9h-6.9V14.4h10.8l12.4,32h0.2l13.1-32H140.4 z M146.6,17.7c0-1.2,0.4-2.2,1.3-3c0.9-0.8,1.9-1.2,3.1-1.2c1.3,0,2.4,0.4,3.2,1.2s1.3,1.8,1.3,3c0,1.2-0.4,2.2-1.3,3 c-0.9,0.8-1.9,1.2-3.2,1.2s-2.3-0.4-3.1-1.2C147.1,19.8,146.6,18.8,146.6,17.7z M154.7,26.6v31h-7.3v-31H154.7z M176.8,52.3 c1.1,0,2.3-0.2,3.6-0.8c1.3-0.5,2.5-1.2,3.6-2v6.8c-1.2,0.7-2.5,1.2-4,1.5c-1.5,0.3-3.1,0.5-4.9,0.5c-4.6,0-8.3-1.4-11.1-4.3 c-2.9-2.9-4.3-6.6-4.3-11c0-5,1.5-9.1,4.4-12.3c2.9-3.2,7-4.8,12.4-4.8c1.4,0,2.8,0.2,4.1,0.5c1.4,0.3,2.5,0.8,3.3,1.2v7 c-1.1-0.8-2.3-1.5-3.4-1.9c-1.2-0.4-2.4-0.7-3.6-0.7c-2.9,0-5.2,0.9-7,2.8s-2.6,4.4-2.6,7.6c0,3.1,0.9,5.6,2.6,7.3 C171.6,51.4,173.9,52.3,176.8,52.3z M204.7,26.1c0.6,0,1.1,0,1.6,0.1s0.9,0.2,1.2,0.3v7.4c-0.4-0.3-0.9-0.6-1.7-0.8 s-1.6-0.4-2.7-0.4c-1.8,0-3.3,0.8-4.5,2.3s-1.9,3.8-1.9,7v15.6h-7.3v-31h7.3v4.9h0.1c0.7-1.7,1.7-3,3-4 C201.2,26.6,202.8,26.1,204.7,26.1z M207.9,42.6c0-5.1,1.5-9.2,4.3-12.2c2.9-3,6.9-4.5,12-4.5c4.8,0,8.6,1.4,11.3,4.3 s4.1,6.8,4.1,11.7c0,5-1.5,9-4.3,12c-2.9,3-6.8,4.5-11.8,4.5c-4.8,0-8.6-1.4-11.4-4.2C209.3,51.3,207.9,47.4,207.9,42.6z M215.5,42.3c0,3.2,0.7,5.7,2.2,7.4s3.6,2.6,6.3,2.6c2.6,0,4.7-0.8,6.1-2.6c1.4-1.7,2.1-4.2,2.1-7.6c0-3.3-0.7-5.8-2.1-7.6 c-1.4-1.7-3.5-2.6-6-2.6c-2.7,0-4.7,0.9-6.2,2.7C216.2,36.5,215.5,39,215.5,42.3z M250.5,34.8c0,1,0.3,1.9,1,2.5 c0.7,0.6,2.1,1.3,4.4,2.2c2.9,1.2,5,2.5,6.1,3.9c1.2,1.5,1.8,3.2,1.8,5.3c0,2.9-1.1,5.2-3.4,7c-2.2,1.8-5.3,2.6-9.1,2.6 c-1.3,0-2.7-0.2-4.3-0.5c-1.6-0.3-2.9-0.7-4-1.2v-7.2c1.3,0.9,2.8,1.7,4.3,2.2c1.5,0.5,2.9,0.8,4.2,0.8c1.6,0,2.9-0.2,3.6-0.7 c0.8-0.5,1.2-1.2,1.2-2.3c0-1-0.4-1.8-1.2-2.6c-0.8-0.7-2.4-1.5-4.6-2.4c-2.7-1.1-4.6-2.4-5.7-3.8s-1.7-3.2-1.7-5.4 c0-2.8,1.1-5.1,3.3-6.9c2.2-1.8,5.1-2.7,8.6-2.7c1.1,0,2.3,0.1,3.6,0.4s2.5,0.6,3.4,0.9V34c-1-0.6-2.1-1.2-3.4-1.7 c-1.3-0.5-2.6-0.7-3.8-0.7c-1.4,0-2.5,0.3-3.2,0.8C250.9,33.1,250.5,33.8,250.5,34.8z M266.9,42.6c0-5.1,1.5-9.2,4.3-12.2 c2.9-3,6.9-4.5,12-4.5c4.8,0,8.6,1.4,11.3,4.3s4.1,6.8,4.1,11.7c0,5-1.5,9-4.3,12c-2.9,3-6.8,4.5-11.8,4.5c-4.8,0-8.6-1.4-11.4-4.2 C268.4,51.3,266.9,47.4,266.9,42.6z M274.5,42.3c0,3.2,0.7,5.7,2.2,7.4s3.6,2.6,6.3,2.6c2.6,0,4.7-0.8,6.1-2.6 c1.4-1.7,2.1-4.2,2.1-7.6c0-3.3-0.7-5.8-2.1-7.6c-1.4-1.7-3.5-2.6-6-2.6c-2.7,0-4.7,0.9-6.2,2.7C275.3,36.5,274.5,39,274.5,42.3z M322.9,32.6h-10.9v25h-7.4v-25h-5.2v-6h5.2v-4.3c0-3.2,1.1-5.9,3.2-8s4.8-3.1,8.1-3.1c0.9,0,1.7,0.1,2.4,0.1s1.3,0.2,1.8,0.4v6.3 c-0.2-0.1-0.7-0.3-1.3-0.5c-0.6-0.2-1.3-0.3-2.1-0.3c-1.5,0-2.7,0.5-3.5,1.4c-0.8,0.9-1.2,2.4-1.2,4.2v3.7h10.9v-7l7.3-2.2v9.2h7.4 v6h-7.4v14.5c0,1.9,0.4,3.2,1,4c0.7,0.8,1.8,1.2,3.3,1.2c0.4,0,0.9-0.1,1.5-0.3c0.6-0.2,1.1-0.4,1.5-0.7v6c-0.5,0.3-1.2,0.5-2.3,0.7 c-1.1,0.2-2.1,0.3-3.2,0.3c-3.1,0-5.4-0.8-6.9-2.4c-1.5-1.6-2.3-4.1-2.3-7.4L322.9,32.6L322.9,32.6z"
      />
      <rect fill="currentColor" width="34.2" height="34.2" />
      <rect x="37.8" fill="currentColor" width="34.2" height="34.2" />
      <rect y="37.8" fill="currentColor" width="34.2" height="34.2" />
      <rect x="37.8" y="37.8" fill="currentColor" width="34.2" height="34.2" />
    </svg>
  )
}
