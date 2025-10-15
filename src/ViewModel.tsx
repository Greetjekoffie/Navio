import Menu from "./Menu.tsx";
import {Model} from "./Model.tsx";
import { Canvas } from '@react-three/fiber'
import {Suspense} from "react";
import {OrbitControls} from "@react-three/drei";

export default function ViewModel() {
    return (
        <div>
            <Menu/>
            <div>
                <div className={"font-bold text-2xl my-2"}>
                    Preview a scan of Flux Hall D below
                </div>
                <div className={"flex justify-center mx-auto !bg-white"} style={{ width: '70vw', height: '70vh' }}>
                    <Canvas>
                        <ambientLight intensity={0.5} />
                        <Suspense fallback={null}>
                            <Model />
                        </Suspense>
                        <OrbitControls/>
                    </Canvas>
                </div>
            </div>

        </div>
    )
}