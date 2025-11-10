import { useGLTF } from '@react-three/drei'

// @ts-ignore
export function Model(props) {
        const modelUrl = "https://pub-41a07f1dc5dc4cca8eac07cf2da66117.r2.dev/14_10_2025.glb"
        // @ts-ignore
        const { nodes } = useGLTF(modelUrl) as any

        return (
            <group {...props} dispose={null}>
                    <mesh geometry={nodes.Mesh_0.geometry} material={nodes.Mesh_0.material} />
                    <mesh geometry={nodes.Mesh_1.geometry} material={nodes.Mesh_1.material} />
                    <mesh geometry={nodes.Mesh_2.geometry} material={nodes.Mesh_2.material} />
                    <mesh geometry={nodes.Mesh_3.geometry} material={nodes.Mesh_3.material} />
                    <mesh geometry={nodes.Mesh_4.geometry} material={nodes.Mesh_4.material} />
                    <mesh geometry={nodes.Mesh_5.geometry} material={nodes.Mesh_5.material} />
                    <mesh geometry={nodes.Mesh_6.geometry} material={nodes.Mesh_6.material} />
                    <mesh geometry={nodes.Mesh_7.geometry} material={nodes.Mesh_7.material} />
                    <mesh geometry={nodes.Mesh_8.geometry} material={nodes.Mesh_8.material} />
                    <mesh geometry={nodes.Mesh_9.geometry} material={nodes.Mesh_9.material} />
                    <mesh geometry={nodes.Mesh_10.geometry} material={nodes.Mesh_10.material} />
                    <mesh geometry={nodes.Mesh_11.geometry} material={nodes.Mesh_11.material} />
                    <mesh geometry={nodes.Mesh_12.geometry} material={nodes.Mesh_12.material} />
                    <mesh geometry={nodes.Mesh_13.geometry} material={nodes.Mesh_13.material} />
                    <mesh geometry={nodes.Mesh_14.geometry} material={nodes.Mesh_14.material} />
                    <mesh geometry={nodes.Mesh_15.geometry} material={nodes.Mesh_15.material} />
                    <mesh geometry={nodes.Mesh_16.geometry} material={nodes.Mesh_16.material} />
                    <mesh geometry={nodes.Mesh_17.geometry} material={nodes.Mesh_17.material} />
                    <mesh geometry={nodes.Mesh_18.geometry} material={nodes.Mesh_18.material} />
                    <mesh geometry={nodes.Mesh_19.geometry} material={nodes.Mesh_19.material} />
                    <mesh geometry={nodes.Ball1.geometry} material={nodes.Ball1.material} />
            </group>
        )
}
