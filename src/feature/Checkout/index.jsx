import React, { useEffect, useState } from 'react'
import ConsigneeForm from './components/ConsigneeForm'

const Checkout = () => {
  const [provinces, setProvinces] = useState({})
  const [districts, setDistricts] = useState([])
  const [wards, setWards] = useState([])
  const [formData, setFormData] = useState({
    ward: '',
    province: '',
    district: '',
  })

  useEffect(() => {
    const fetchProvinces = async () => {
      const dataProvince = await (
        await fetch('https://provinces.open-api.vn/api/?depth=3')
      ).json()
      setProvinces(dataProvince)
    }
    fetchProvinces()
  }, [])

  const handleChangeaddress = (e) => {
    let provinceName = e.target.value
    setFormData({
      ...formData,
      province: provinceName,
    })
    let districtsObj = Object.values(provinces).filter(
      (item) => item.name === provinceName
    )[0].districts
    setDistricts(Object.values(districtsObj))
  }

  const handleDistrictChange = (e) => {
    let districtName = e.target.value
    setFormData({
      ...formData,
      district: districtName,
    })
    let wardsObj = Object.values(districts).filter(
      (item) => item.name === districtName
    )[0].wards
    setWards(Object.values(wardsObj))
  }

  return (
    <div>
      <ConsigneeForm />

      <select
        name='provinces'
        type='text'
        id='provinces'
        onChange={handleChangeaddress}
        value={formData.province}
      >
        <option value=''>Chọn tỉnh/thành phố</option>
        {Object.values(provinces).map((item, i) => (
          <option key={i}>{item.name}</option>
        ))}
      </select>

      <select
        name='district'
        id='district'
        type='text'
        onChange={handleDistrictChange}
        value={formData.district}
      >
        <option value=''>Chọn Quận/Huyện</option>
        {Object.values(districts).map((item, i) => (
          <option key={i}>{item.name}</option>
        ))}
      </select>

      <select
        name='ward'
        id='ward'
        type='text'
        onChange={(e) => setFormData({ ...formData, ward: e.target.value })}
        value={formData.ward}
      >
        <option value=''>Chọn Xã/Phường</option>
        {Object.values(wards).map((item, i) => (
          <option key={i}>{item.name}</option>
        ))}
      </select>
    </div>
  )
}

export default Checkout
