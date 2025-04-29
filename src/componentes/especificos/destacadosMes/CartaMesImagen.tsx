import React from "react";
import { Box, CardMedia, CircularProgress } from "@mui/material";

interface CartaMesImagenProps {
  imagen: string;
  alt: string;
  cargando: boolean;
  colorSecundario: string;
}

const CartaMesImagen: React.FC<CartaMesImagenProps> = ({ imagen, alt, cargando, colorSecundario }) => {
  return (
    <Box sx={{ position: "relative", width: "100%" }}>
      {cargando && (
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(5px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2,
          }}
        >
          <CircularProgress sx={{ color: colorSecundario }} />
        </Box>
      )}
      <CardMedia
        component="img"
        height="200"
        image={imagen}
        alt={alt}
        sx={{
          filter: cargando ? "blur(8px)" : "none",
          transition: "filter 0.5s ease-in-out",
          objectFit: "cover",
        }}
      />
    </Box>
  );
};

export default CartaMesImagen;
