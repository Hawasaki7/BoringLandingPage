import { MathUtils } from 'three'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'

import React, { useMemo, useContext, createContext , useRef , useState , useEffect } from 'react'
import { useGLTF, Merged , Stars } from '@react-three/drei'
import {  useFrame , } from '@react-three/fiber'


  
  




const randomVector = (r) => [10 / 2 - Math.random() * 10, r / 2 - Math.random() * r, 10 / 2 - Math.random() * 10]
const randomEuler = () => [Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI]
const randomData = Array.from({ length: 50 }, (r = 4) => ({ random: Math.random(), position: randomVector(r), rotation: randomEuler() }))






export default function App() {
  const [range,setRange] = useState('10');
  useEffect(()=>{
    if (document.querySelector('.slider')) {
      const coo = document.querySelector('.slider');
      coo.addEventListener('change', (event) => {
        setRange(event.target.value) 
      });
    }
  });
  

  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 20 }} >
      <color attach="background" args={["#bF42F5"]} />
      <fog attach="fog" args={["#8658A5", 10, 23]} />
      <Stars radius={50} depth={50} count={5000} factor={4} saturation={0} fade speed={2} />
      <ambientLight color={"#ff00ff"} intensity={1} /> 
      <directionalLight position={[10, 10, 10]} />
      <spotLight intensity={10.6} position={[0, 0, 15]} angle={0.2} color={"#ff00ff" }  penumbra={1} castShadow />
      <Instances range={range} >
        {randomData.map((props, index) => (
          <Model key={index} scale={0.1} {...props} />
        ))}
      </Instances>
      <OrbitControls  autoRotate={true} autoRotateSpeed={0.5} enableZoom={false} enablePan={false} enableRotate={false} enableDamping={false} />
    </Canvas>
  )
}



const context = createContext()
 function Instances({ children, ...props }) {
  const { nodes } = useGLTF('/iphone14.glb')
  const instances = useMemo(
    () => ({
      LxsKwuOPNvmzBKg: nodes.lxsKwuOPNvmzBKg_0,
      AlSOKOYgFKIcUtR: nodes.alSOKOYgFKIcUtR,
      FjhETOCBEeiBmch: nodes.FjhETOCBEeiBmch,
      AbxQOpRbGREHXRG: nodes.AbxQOpRbGREHXRG,
      TWfjYtMZCfucxRt: nodes.tWfjYtMZCfucxRt,
      XbtrdVaOWYmkEiU: nodes.XbtrdVaOWYmkEiU,
      YbXWdqEcjbfTKuN: nodes.YbXWdqEcjbfTKuN_0,
      RrqFqyfckTuyRuI: nodes.rrqFqyfckTuyRuI,
      OMkeKbwVHRBkBwM: nodes.OMkeKbwVHRBkBwM,
      DLfIUIalXuQjJsL: nodes.DLfIUIalXuQjJsL,
      KABLQLZRuEbcLWk: nodes.KABLQLZRuEbcLWk,
      QjXEDwnnBYwWcJn: nodes.qjXEDwnnBYwWcJn,
      FGDSbHbILfUmiaH: nodes.FGDSbHbILfUmiaH,
      JQXfQpudiYObSGp: nodes.jQXfQpudiYObSGp,
      KnexoFNknstHgiO: nodes.knexoFNknstHgiO,
      FaUtifOQSMTXiZM: nodes.FaUtifOQSMTXiZM,
      BhvzCWikxrVeDTV: nodes.BhvzCWikxrVeDTV,
      MMkajxMNWrwGQfi: nodes.MMkajxMNWrwGQfi,
      YnrVhXEUDbStWCs: nodes.YnrVhXEUDbStWCs,
      EPYqawqlCJbCsNi: nodes.ePYqawqlCJbCsNi,
      RGbIswEcCTzqNsn: nodes.RGbIswEcCTzqNsn_0,
      IuMgFUHIyRWENxG: nodes.IuMgFUHIyRWENxG_0,
      DNDonqESZOxUcei: nodes.dNDonqESZOxUcei_0,
      XeFHhVBtRZWPGxR: nodes.XeFHhVBtRZWPGxR,
      NJYGEbPQybRBbiN: nodes.nJYGEbPQybRBbiN,
      JyAbjubWrOdfygC: nodes.JyAbjubWrOdfygC_0,
      NxFoHsySvfcSLvp: nodes.nxFoHsySvfcSLvp,
      OCklTGvTZoDWJrC: nodes.oCklTGvTZoDWJrC_0,
      VauUojKrKkLLDtY: nodes.vauUojKrKkLLDtY,
      YqmgDmvGsmuPwXx: nodes.yqmgDmvGsmuPwXx_0,
      WjSYkRykuFHJNPw: nodes.wjSYkRykuFHJNPw,
      RJeCWUNsVVXXAbI: nodes.rJeCWUNsVVXXAbI,
      RqSonbcVVSPWFfa: nodes.rqSonbcVVSPWFfa_0,
      TWBbDznHihIxXam: nodes.tWBbDznHihIxXam,
      PLFTnNQeqVAxicS: nodes.PLFTnNQeqVAxicS,
      GWEiavWnRxbogtw: nodes.GWEiavWnRxbogtw_0,
      RFqaqXLpuCDBIGV: nodes.RFqaqXLpuCDBIGV_0,
      JUTNJcWwqyxbGDZ: nodes.JUTNJcWwqyxbGDZ_0,
      BDLCJBydsNjizog: nodes.BDLCJBydsNjizog_0,
      ZPPSOvNamLQVyvv: nodes.zPPSOvNamLQVyvv,
      YPGjoywokSeoQFr: nodes.YPGjoywokSeoQFr,
      MoTJNOoMxqdxNvQ: nodes.MoTJNOoMxqdxNvQ,
      MZxrNiCtMrMjOMv: nodes.mZxrNiCtMrMjOMv,
      TQCDizUpBYNcvFA: nodes.tQCDizUpBYNcvFA,
      CAQeTxdpUcbxQyT: nodes.CAQeTxdpUcbxQyT,
      QsTxqfACkdoWeLQ: nodes.qsTxqfACkdoWeLQ,
      AVmapfDgqkPkjUf: nodes.aVmapfDgqkPkjUf,
      LgnGJJmNebyRbHq: nodes.lgnGJJmNebyRbHq_0,
      QaGkMzxNzKPcqRy: nodes.QaGkMzxNzKPcqRy,
      KUDomTaVduCyevu: nodes.KUDomTaVduCyevu,
      QOfJIBEXOvXfSUh: nodes.QOfJIBEXOvXfSUh,
      RUMRNTkptJGDMpy: nodes.RUMRNTkptJGDMpy,
      AYjPeBrpBRopJbp: nodes.aYjPeBrpBRopJbp,
      BeQtuLXtpSTrzAH: nodes.BeQtuLXtpSTrzAH,
      UCttAeyROPsgmix: nodes.UCttAeyROPsgmix,
    }),
    [nodes]
  )
  
  return (
    <Merged  meshes={instances} {...props}>
      {(instances) => <context.Provider value={instances} children={children} />}
    </Merged>
  )
}

function Model(props) {
  const instances = useContext(context)
  const { nodes, materials } = useGLTF('/iphone14.glb')
  
  const refe = useRef();
  const [hovered, setHover] = useState(false)
  useFrame((state,delta) => {
    
    const t = state.clock.getElapsedTime() /2
    refe.current.rotation.set(Math.cos(t / 4) / 2, Math.sin(t / 4) / 2, Math.cos(t / 1.5) / 2)
    refe.current.position.y = Math.sin(t / 1.5) / 2
    refe.current.scale.x = refe.current.scale.y = refe.current.scale.z = THREE.MathUtils.lerp(refe.current.scale.z, hovered ? 1.1 : 1, 0.1)
  
  })


  return (
    <group  {...props} dispose={null}>
      <group ref={refe}  onPointerOver={(e) => (e.stopPropagation(), setHover(true))} onPointerOut={(e) => setHover(false)} > 
        <instances.LxsKwuOPNvmzBKg />
        <instances.AlSOKOYgFKIcUtR />
        <instances.FjhETOCBEeiBmch />
        <instances.AbxQOpRbGREHXRG />
        <instances.TWfjYtMZCfucxRt />
        <instances.XbtrdVaOWYmkEiU />
        <instances.YbXWdqEcjbfTKuN />
        <instances.RrqFqyfckTuyRuI />
        <instances.OMkeKbwVHRBkBwM />
        <instances.DLfIUIalXuQjJsL />
        <instances.KABLQLZRuEbcLWk />
        <instances.QjXEDwnnBYwWcJn />
        <instances.FGDSbHbILfUmiaH />
        <instances.JQXfQpudiYObSGp />
        <instances.KnexoFNknstHgiO />
        <instances.FaUtifOQSMTXiZM />
        <instances.BhvzCWikxrVeDTV />
        <instances.MMkajxMNWrwGQfi />
        <instances.YnrVhXEUDbStWCs />
        <instances.EPYqawqlCJbCsNi />
        <instances.RGbIswEcCTzqNsn />
        <instances.IuMgFUHIyRWENxG />
        <instances.DNDonqESZOxUcei />
        <instances.XeFHhVBtRZWPGxR />
        <instances.NJYGEbPQybRBbiN />
        <instances.JyAbjubWrOdfygC />
        <instances.NxFoHsySvfcSLvp />
        <instances.OCklTGvTZoDWJrC />
        <instances.VauUojKrKkLLDtY />
        <instances.YqmgDmvGsmuPwXx />
        <instances.WjSYkRykuFHJNPw />
        <instances.RJeCWUNsVVXXAbI />
        <instances.RqSonbcVVSPWFfa />
        <instances.TWBbDznHihIxXam />
        <instances.PLFTnNQeqVAxicS />
        <instances.GWEiavWnRxbogtw />
        <instances.RFqaqXLpuCDBIGV />
        <instances.JUTNJcWwqyxbGDZ />
        <instances.BDLCJBydsNjizog />
        <instances.ZPPSOvNamLQVyvv />
        <instances.YPGjoywokSeoQFr />
        <instances.MoTJNOoMxqdxNvQ />
        <instances.MZxrNiCtMrMjOMv />
        <instances.TQCDizUpBYNcvFA />
        <instances.CAQeTxdpUcbxQyT />
        <instances.QsTxqfACkdoWeLQ />
        <instances.AVmapfDgqkPkjUf />
        <instances.LgnGJJmNebyRbHq />
        <instances.QaGkMzxNzKPcqRy />
        <instances.KUDomTaVduCyevu />
        <instances.QOfJIBEXOvXfSUh />
        <instances.RUMRNTkptJGDMpy />
        <instances.AYjPeBrpBRopJbp />
        <instances.BeQtuLXtpSTrzAH />
        <instances.UCttAeyROPsgmix />
      </group>
    </group>
  )
}

useGLTF.preload('/iphone14.glb')
