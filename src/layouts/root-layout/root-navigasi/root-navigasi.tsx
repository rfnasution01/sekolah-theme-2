import { MenuType } from '@/libs/types/beranda-type'
import { MappingNavigasi } from './mapping-navigasi'

export function RootNavigasi({
  loading,
  menuUtama,
}: {
  loading: boolean
  menuUtama: MenuType[]
}) {
  return (
    <div className="flex items-center justify-between gap-32 bg-primary-300 pl-64 text-primary-100">
      <MappingNavigasi loading={loading} menuUtama={menuUtama} />
    </div>
  )
}
