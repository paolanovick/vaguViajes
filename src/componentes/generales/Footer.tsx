import { FunctionComponent } from "react";
import { Box, Grid, Divider } from "@mui/material";
import { useFooter, useDatosGenerales } from "../../contextos/DatosAgenciaContext";
import IzquierdaArriba from "./IzquierdaArriba";
import IzquierdaAbajo from "./IzquierdaAbajo";
import DerechaArriba from "./DerechaArriba";
import DerechaAbajo from "./DerechaAbajo";

const Footer: FunctionComponent = () => {
  const footer = useFooter();
  const datosGenerales = useDatosGenerales();

  const fondoColor =
    footer?.color?.terciario || datosGenerales?.color?.terciario || "rgba(0, 0, 0, 0.7)";
  const logo = datosGenerales?.logoAgencia || null;
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: fondoColor,
        width: "100%",
        py: { xs: 4, md: 6 },
        px: { xs: 2, md: 6 }, // Padding más consistente: 16px en mobile, 48px en desktop
        boxSizing: "border-box",
      }}
    >
      <Box sx={{ 
        width: "100%",
        maxWidth: { md: 1200, lg: 1400 }, // Opcional: un ancho máximo para desktop
        margin: '0 auto' // Centrado en desktop si usas maxWidth
      }}>
        {/* Sección superior */}
        <Grid
          container
          spacing={{ xs: 2, md: 3 }} // Espaciado menor en mobile
          sx={{ width: "100%", margin: 0 }}
          alignItems="flex-start"
        >
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              order: { xs: 2, md: 1 },
              paddingLeft: { xs: 0, md: 'inherit' } // Elimina padding extra en mobile
            }}
          >
            <IzquierdaArriba logo={logo} />
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{
              textAlign: { xs: "left", md: "right" }, // Alineación izquierda en mobile
              order: { xs: 3, md: 2 },
              paddingRight: { xs: 0, md: 'inherit' } // Elimina padding extra en mobile
            }}
          >
            <DerechaArriba />
          </Grid>
        </Grid>

        {/* Línea divisoria */}
        <Divider
          sx={{
            my: { xs: 3, md: 4 },
            backgroundColor: "currentColor",
            opacity: 0.5,
            mx: { xs: -2, md: 0 } // Compensa el padding container en mobile
          }}
        />

        {/* Sección inferior */}
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          sx={{ width: "100%", margin: 0 }}
          alignItems="center"
        >
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              order: { xs: 4, md: 1 },
              paddingLeft: { xs: 0, md: 'inherit' }
            }}
          >
            <IzquierdaAbajo year={currentYear} />
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{
              textAlign: { xs: "left", md: "right" },
              order: { xs: 1, md: 2 },
              paddingRight: { xs: 0, md: 'inherit' }
            }}
          >
            <DerechaAbajo />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Footer;