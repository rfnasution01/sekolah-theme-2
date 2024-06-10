import { HomeCard, HomeLayanan, HomeTestimoni } from '@/features/home'
import { HomeBeranda } from '@/features/home/home-beranda'
import { BerandaType, IdentitasType } from '@/libs/types/beranda-type'
import {
  useGetBerandaQuery,
  useGetIdentitasQuery,
} from '@/store/slices/berandaAPI'
import { useEffect, useState } from 'react'

export default function HomePage() {
  //   --- Beranda ---
  const [beranda, setBeranda] = useState<BerandaType[]>([])
  const { data, isFetching, isLoading } = useGetBerandaQuery()

  const loadingBeranda = isFetching || isLoading

  useEffect(() => {
    if (data?.data) {
      setBeranda(data?.data)
    }
  }, [data?.data])

  // --- Identitas ---
  const [identitas, setIdentitas] = useState<IdentitasType>()
  const { data: identitasData } = useGetIdentitasQuery()

  useEffect(() => {
    if (identitasData?.data) {
      setIdentitas(identitasData?.data)
    }
  }, [identitasData?.data])

  return (
    <div className="mb-80 flex flex-col gap-32">
      {/* --- Banner --- */}
      <HomeBeranda sekolah={identitas?.nama_website} />
      {/* {loadingSlider ? <Loading /> : <Slider1 listImage={slider} isShadow />} */}
      <HomeCard loading={loadingBeranda} beranda={beranda} />
      <HomeLayanan />
      <HomeTestimoni />
    </div>
  )
}
