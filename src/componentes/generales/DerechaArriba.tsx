import { FunctionComponent } from "react";
import { Stack, Typography, Box, IconButton } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useFooter, useDatosGenerales } from "../../contextos/DatosAgenciaContext";

const redes = [
  { icon: <FacebookOutlinedIcon />, link: "#", label: "Facebook" },
  { icon: <TwitterIcon />, link: "#", label: "Twitter" },
  { icon: <InstagramIcon />, link: "#", label: "Instagram" },
];

const DerechaArriba: FunctionComponent = () => {
  const footer = useFooter();
  const datosGenerales = useDatosGenerales();

  const tipografia =
    footer?.tipografia || datosGenerales?.tipografiaAgencia || "inherit";
  const textoColor =
    footer?.tipografiaColor || datosGenerales?.colorTipografiaAgencia || "#FFFFFF";

  return (
    <Box
      sx={{
        backgroundColor: "transparent",
        py: { xs: 2, md: 3 },
        px: { xs: 0, md: 0 },
        display: "flex",
        justifyContent: { xs: "center", md: "flex-end" },
        alignItems: "center",
        width: "100%",
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={{ xs: 4, md: 6 }}
        alignItems={{ xs: "center", md: "flex-start" }}
        justifyContent={{ xs: "center", md: "flex-end" }}
        textAlign={{ xs: "center", md: "right" }}
        width="100%"
        maxWidth="1200px"
      >
        {/* Información de contacto */}
        <Stack
          spacing={1.5}
          alignItems={{ xs: "center", md: "flex-end" }}
          textAlign={{ xs: "center", md: "right" }}
          sx={{ flex: 1 }}
        >
          <Typography
            variant="h6"
            sx={{ color: textoColor, fontFamily: tipografia }}
          >
            Contacto
          </Typography>

          {footer?.contacto.telefono && (
            <Stack direction="row" spacing={1} alignItems="center" justifyContent="center">
              <PhoneIcon sx={{ color: textoColor }} />
              <Typography
                variant="body2"
                sx={{ color: textoColor, fontFamily: tipografia }}
              >
                {footer.contacto.telefono}
              </Typography>
            </Stack>
          )}

          {footer?.contacto.email && (
            <Stack direction="row" spacing={1} alignItems="center" justifyContent="center">
              <EmailIcon sx={{ color: textoColor }} />
              <Typography
                variant="body2"
                sx={{ color: textoColor, fontFamily: tipografia }}
              >
                {footer.contacto.email}
              </Typography>
            </Stack>
          )}

          {footer?.ubicacion.direccion && (
            <>
              <Typography
                variant="h6"
                sx={{
                  color: textoColor,
                  fontFamily: tipografia,
                  mt: 4,
                }}
              >
                Ubicación
              </Typography>
              <Stack direction="row" spacing={1} alignItems="center" justifyContent="center">
                <LocationOnIcon sx={{ color: textoColor }} />
                <Typography
                  variant="body2"
                  sx={{ color: textoColor, fontFamily: tipografia }}
                >
                  {footer.ubicacion.direccion}
                  {footer.ubicacion.ciudad ? `, ${footer.ubicacion.ciudad}` : ""}
                  {footer.ubicacion.pais ? `, ${footer.ubicacion.pais}` : ""}
                </Typography>
              </Stack>
            </>
          )}
        </Stack>

        {/* Redes sociales */}
        <Stack
          direction={{ xs: "row", md: "column" }}
          spacing={1}
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
        >
          {redes.map(({ icon, link, label }, index) => (
            <IconButton
              key={index}
              href={link}
              aria-label={label}
              sx={{
                color: textoColor,
                backgroundColor: "transparent",
                border: `1px solid ${textoColor}`,
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
                width: 40,
                height: 40,
              }}
            >
              {icon}
            </IconButton>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};

export default DerechaArriba;
