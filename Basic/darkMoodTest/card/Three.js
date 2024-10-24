<script>
  // Set up the scene, camera, and renderer
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('three-canvas'), alpha: true });

  // Set the size for the renderer based on the container
  renderer.setSize(200, 200); // Size matches model-container

  // Create a geometry (cube) and material (glowing)
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshStandardMaterial({
    color: 0x00ffff,
    emissive: 0x008080, // Emissive color for glow effect
    metalness: 0.7,
    roughness: 0.2
  });

  // Create the mesh with geometry and material, then add it to the scene
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  // Add a point light to simulate glow
  const pointLight = new THREE.PointLight(0xffffff, 1, 100);
  pointLight.position.set(2, 3, 4);
  scene.add(pointLight);

  // Add ambient light for general illumination
  const ambientLight = new THREE.AmbientLight(0x404040);
  scene.add(ambientLight);

  // Move the camera back so we can see the cube
  camera.position.z = 2.5;

  // Animation loop to rotate the cube and re-render the scene
  function animate() {
    requestAnimationFrame(animate);

    // Rotate the cube for 3D effect
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
  }

  // Start the animation
  animate();
</script>
