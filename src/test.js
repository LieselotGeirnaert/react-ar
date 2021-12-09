// <ARCanvas>
    //   <Suspense fallback={<Loader />}>

    //     <CustomPlanet name={"mars"} />

    //   </Suspense>
    // </ARCanvas>


    const Loader = () => {
      const { progress } = useProgress();
      return <Html center>{progress} % loaded</Html>;
    };