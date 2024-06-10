import { ProfilType } from '@/libs/types/profil-type'

export function ProfilVisi({
  profil,
  sekolah,
}: {
  profil: ProfilType
  sekolah: string
}) {
  return (
    <div className="flex w-full flex-col gap-48 rounded-2xl px-64 shadow phones:p-32">
      <div className="flex flex-col gap-16">
        <p className="font-roboto text-[5rem]">
          {profil?.profil?.[0]?.jenis} dan {profil?.profil?.[1]?.jenis}{' '}
          {sekolah}
        </p>
        <hr className="border-warning-500 w-[20rem] border" />
      </div>
      <div className="flex w-full flex-col gap-12">
        <p className="font-roboto text-[3rem] uppercase">
          {profil?.profil?.[0]?.jenis} Pendidikan {sekolah}
        </p>
        <blockquote className="text-center font-nunito text-[4rem]">
          {`"${profil?.profil?.[0]?.keterangan}"`}
        </blockquote>
        <blockquote className="text-center font-mono text-[2.4rem]">
          {`"${profil?.profil?.[0]?.sub_keterangan}"`}
        </blockquote>
      </div>
      <div className="flex w-full flex-col gap-12">
        <p className="font-roboto text-[3rem] uppercase">
          {profil?.profil?.[1]?.jenis} Pendidikan {sekolah}
        </p>
        <ul className="ml-48 list-disc">
          {profil?.profil?.[1]?.list?.map((item, idx) => (
            <li key={idx} className="py-8">
              {item?.keterangan ?? ''}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
