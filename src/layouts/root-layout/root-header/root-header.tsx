import { Dispatch, SetStateAction } from 'react'
import { MenuType } from '@/libs/types/beranda-type'
import { SingleSkeleton } from '@/components/skeleton'
import { NavigasiHeader } from './mapping-navigasi'
import { LayoutDashboard, X } from 'lucide-react'

export function RootHeader({
  setIsShow,
  isShow,
  loading,
  menuTop,
}: {
  setIsShow: Dispatch<SetStateAction<boolean>>
  isShow: boolean
  loading: boolean
  menuTop: MenuType[]
}) {
  return (
    <div className="flex items-center gap-32">
      {loading ? (
        <SingleSkeleton height="h-[3rem]" />
      ) : (
        <div className="flex w-full items-center justify-end gap-32 phones:flex-row-reverse">
          <div className="phones:hidden">
            <NavigasiHeader menu={menuTop} />
          </div>
          <div className="hidden phones:block">
            <span
              onClick={() => {
                setIsShow(!isShow)
              }}
            >
              {!isShow ? <LayoutDashboard size={20} /> : <X size={20} />}
            </span>
          </div>
        </div>
      )}
    </div>
  )
}
