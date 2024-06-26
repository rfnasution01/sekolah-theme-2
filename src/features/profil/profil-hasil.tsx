import { ProfilType } from '@/libs/types/profil-type'

export function ProfilHasil({
  profil,
  sekolah,
}: {
  profil: ProfilType
  sekolah: string
}) {
  return (
    <div className="flex justify-center bg-primary-500 p-64 py-32 text-primary-100 phones:p-32">
      <div className="flex w-11/12 flex-col items-center justify-center gap-16 phones:w-full">
        <p className="text-center font-roboto text-[5rem]">
          {profil?.profil?.[4]?.jenis} Yang Diharapakan {sekolah}
        </p>
        <div className="flex flex-col gap-8">
          <p>{profil?.profil?.[4]?.keterangan}</p>
          <ol className="ml-48 list-decimal">
            {profil?.profil?.[4]?.list?.map((item, idx) => (
              <li key={idx} className="py-8">
                {item?.keterangan ?? '-'}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  )
}
