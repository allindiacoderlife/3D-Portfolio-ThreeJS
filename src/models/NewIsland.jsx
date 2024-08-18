import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { a } from "@react-spring/three";
import islandScene from "../assets/3d/new.glb";

const NewIsland = (props) => {
  const islandRef = useRef();
  const { nodes, materials } = useGLTF(islandScene);
  return (
    <a.group ref={islandRef} {...props}>
      <a.group position={[0, -3.036, 0]}>
        <mesh geometry={nodes.Object_125.geometry} material={materials.water} />
        <mesh
          geometry={nodes.Object_125_1.geometry}
          material={materials["rocks.003"]}
        />
        <mesh
          geometry={nodes.Object_125_2.geometry}
          material={materials.tree_bark}
        />
        <mesh
          geometry={nodes.Object_125_3.geometry}
          material={materials.leaves}
        />
        <mesh
          geometry={nodes.Object_125_4.geometry}
          material={materials["leaves.001"]}
        />
        <mesh
          geometry={nodes.Object_125_5.geometry}
          material={materials["rocks.002"]}
        />
        <mesh
          geometry={nodes.Object_125_6.geometry}
          material={materials.bark_2}
        />
        <mesh
          geometry={nodes.Object_125_7.geometry}
          material={materials["rocks.001"]}
        />
        <mesh
          geometry={nodes.Object_125_8.geometry}
          material={materials.pillar}
        />
        <mesh
          geometry={nodes.Object_125_9.geometry}
          material={materials.rocks}
        />
        <mesh
          geometry={nodes.Object_125_10.geometry}
          material={materials.bark3}
        />
        <mesh
          geometry={nodes.Object_125_11.geometry}
          material={materials.bones}
        />
        <mesh
          geometry={nodes.Object_125_12.geometry}
          material={materials.material_0}
        />
        <mesh
          geometry={nodes.Object_125_13.geometry}
          material={materials["Material.004"]}
        />
        <mesh
          geometry={nodes.Object_125_14.geometry}
          material={materials.emission}
        />
        <mesh
          geometry={nodes.Object_125_15.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          geometry={nodes.Object_125_16.geometry}
          material={materials["Material.006"]}
        />
        <mesh
          geometry={nodes.Object_125_17.geometry}
          material={materials["leaves.002"]}
        />
        <mesh
          geometry={nodes.Object_125_18.geometry}
          material={materials["leaves.003"]}
        />
        <mesh
          geometry={nodes.Object_125_19.geometry}
          material={materials["Material.007"]}
        />
        <mesh
          geometry={nodes.Object_125_20.geometry}
          material={materials["leaves.004"]}
        />
        <mesh
          geometry={nodes.Object_125_21.geometry}
          material={materials.flower}
        />
        <mesh
          geometry={nodes.Object_125_22.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Object_125_23.geometry}
          material={materials["flower.002"]}
        />
        <mesh
          geometry={nodes.Object_125_24.geometry}
          material={materials["flower.001"]}
        />
        <mesh
          geometry={nodes.Object_125_25.geometry}
          material={materials.butter}
        />
      </a.group>
    </a.group>
  );
};

export default NewIsland;
