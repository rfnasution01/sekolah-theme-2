import { Link } from 'react-router-dom'

export function HomeBeranda({ sekolah }: { sekolah: string }) {
  return (
    <div className="h-screen">
      <div className={`relative block`}>
        <img
          src="/img/home-image.png"
          alt="Banner"
          className={`phones:h-[30vh]" h-screen w-full rounded-lg bg-opacity-10 object-cover filter`}
          style={{}}
          loading="lazy"
        />
        <div className="absolute top-0 flex h-full w-[100%]">
          <div
            className={`relative flex h-full w-full flex-col items-center justify-center border-white`}
          >
            <div className="flex h-3/5 w-2/5 flex-col gap-32 text-white phones:h-4/5 phones:w-4/5">
              <div className="flex flex-col items-center justify-center gap-12">
                <p className="font-serif text-[3rem] uppercase">
                  Selamat Datang
                </p>
                <p className="text-center font-roboto text-[5rem]">{sekolah}</p>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="/img/SMA.png"
                  alt="SMA"
                  loading="lazy"
                  className="w-[25rem]"
                />
              </div>
              <p className="text-center font-nunito text-[3rem]">
                Pendidikan Berkualitas, Masa Depan Gemilang: Membangun Generasi
                Cerdas dan Inspiratif!
              </p>
              <div className="flex items-center justify-center gap-32">
                <Link
                  to="/profil"
                  className="rounded-lg bg-primary-500 px-24 py-12 font-sf-pro uppercase text-primary-100 hover:bg-primary-700"
                >
                  Profil Sekolah
                </Link>
                <Link
                  to="/profil"
                  className="rounded-lg bg-primary-100 px-24 py-12 font-sf-pro uppercase text-primary-500 hover:bg-primary-300"
                >
                  Kontak Kami
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
