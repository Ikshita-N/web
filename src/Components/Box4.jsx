import React from "react";
import { Box, Typography, Button } from "@mui/material";
import BuilderImage from "./Images/builder1.png"; // Import the image from the components folder
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";

const Box4 = () => {
  return (
    <Box
      sx={{
        width: "1024px",
        height: "255px",
        top: "347px",
        left: "284px",
        borderRadius: "12px",
        backgroundColor: "rgba(255, 255, 255, 1)",
        display: "flex",
        flexDirection: "row",
        marginLeft: "12.5%",
        marginRight: "12.5%",
      }}
    >
      {/* First part of the row */}
      <Box
        sx={{
          width: "25%",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Image */}
        <img
          src={BuilderImage}
          alt="Builder 1"
          style={{
            width: "141px",
            height: "103px",
            top: "422px",
            left: "326px",
          }}
        />
        {/* Typography */}
        <Typography
          variant="body1"
          sx={{
            fontFamily: "Inter",
            fontSize: "13px",
            fontWeight: 400,
            lineHeight: "20px",
            letterSpacing: "0em",
            textAlign: "center",
          }}
        >
          CDK
        </Typography>
      </Box>

      {/* Second part of the row */}
      <Box sx={{ width: "50%", padding: "20px" }}>
        {/* First layout */}
        <Box
          sx={{
            width: "490px",
            height: "72px",
            top: "368px",
            left: "525px",
            padding: "10px",
            marginBottom: "20px",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Inter",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "24px",
              letterSpacing: "0em",
              textAlign: "left",
              marginBottom: "10px",
              color: "rgba(75, 86, 101, 1)",
            }}
          >
            <strong>CDK Resposive Builder</strong>- An extensive library of
            widgets and apps, and detailed step-by-step guides
          </Typography>

          <Button
            sx={{
              borderRadius: "4px",
              background: "rgba(242, 244, 247, 1)",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Inter",
                fontSize: "13px",
                fontWeight: "400",
                lineHeight: "20px",
                letterSpacing: "0em",
                textAlign: "left",
                color: "rgba(7, 71, 134, 1)",
              }}
            >
              26% Off
            </Typography>
          </Button>
          

          <Typography
            variant="body1"
            sx={{
              fontFamily: "Inter",
              fontSize: "16px",
              fontWeight: 700,
              lineHeight: "24px",
              letterSpacing: "0em",
              textAlign: "left",
              marginTop:'1.5%'
            }}
          >
            Main highlights
          </Typography>
          
        </Box>

        {/* Second layout */}
        <Box
          sx={{
            width: "1024px",
            height: "436px",
            top: "1211px",
            left: "292px",
            padding: "10px",
            marginTop:'6%'
          }}
        >
          <Box
            sx={{
              width: "505px",
              height: "116px",
              top: "1351px",
              left: "539px",
              borderRadius: "12px",
              backgroundColor: "rgba(255, 244, 237, 1)",
              padding: "10px",
              marginBottom: "20%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <Box
                sx={{
                  width: "40px",
                  height: "28px",
                  borderRadius: "4px",
                  backgroundColor: "rgba(255, 255, 255, 1)",
                  marginRight: "10px",
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: "Inter",
                    fontSize: "15px",
                    fontWeight: 400,
                    lineHeight: "24px",
                    letterSpacing: "0em",
                    textAlign: "left",
                    borderRadius: "4px",
                    padding: "5px",
                  }}
                >
                  9.9
                </Typography>
              </Box>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "Inter",
                  fontSize: "15px",
                  fontWeight: 400,
                  lineHeight: "24px",
                  letterSpacing: "0em",
                  textAlign: "left",
                }}
              >
                Building Responsive
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <Box
                sx={{
                  width: "40px",
                  height: "28px",
                  borderRadius: "4px",
                  backgroundColor: "rgba(255, 255, 255, 1)",
                  marginRight: "10px",
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: "Inter",
                    fontSize: "15px",
                    fontWeight: 400,
                    lineHeight: "24px",
                    letterSpacing: "0em",
                    textAlign: "left",
                    borderRadius: "4px",
                    padding: "5px",
                  }}
                >
                  8.9
                </Typography>
              </Box>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "Inter",
                  fontSize: "15px",
                  fontWeight: 400,
                  lineHeight: "24px",
                  letterSpacing: "0em",
                  textAlign: "left",
                }}
              >
                Cool
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box
                sx={{
                  width: "40px",
                  height: "28px",
                  borderRadius: "4px",
                  backgroundColor: "rgba(255, 255, 255, 1)",
                  marginRight: "10px",
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: "Inter",
                    fontSize: "15px",
                    fontWeight: 400,
                    lineHeight: "24px",
                    letterSpacing: "0em",
                    textAlign: "left",
                    borderRadius: "4px",
                    padding: "5px",
                  }}
                >
                  8.9
                </Typography>
              </Box>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "Inter",
                  fontSize: "15px",
                  fontWeight: 400,
                  lineHeight: "24px",
                  letterSpacing: "0em",
                  textAlign: "left",
                }}
              >
                Docs
              </Typography>
            </Box>
            <Box sx={{ width: "50%", padding: "20px" }}>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "Inter",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "24px",
                  letterSpacing: "0em",
                  textAlign: "left",
                  marginTop: "20px",
                }}
              >
                Why we love it
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                {/* Documentation */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    padding: "10px",
                    borderRadius: "12px",
                    marginBottom: "-6%",
                  }}
                >
                  <CheckCircleRoundedIcon
                    sx={{ color: "rgba(8, 85, 161, 1)", }}
                  />
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: "Inter",
                      fontSize: "16px",
                      fontWeight: 400,
                      lineHeight: "24px",
                      letterSpacing: "0em",
                      textAlign: "left",
                      color: "rgba(75, 86, 101, 1)",
                      marginRight: "10px",
                     
                    }}
                  >
                    Documentation
                  </Typography>
                </Box>
                {/* Easy Use */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    padding: "10px",
                    borderRadius: "12px",
                    marginBottom: "-6%",
                  }}
                >
                  <CheckCircleRoundedIcon
                    sx={{ color: "rgba(8, 85, 161, 1)" }}
                  />
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: "Inter",
                      fontSize: "16px",
                      fontWeight: 400,
                      lineHeight: "24px",
                      letterSpacing: "0em",
                      textAlign: "left",
                      color: "rgba(75, 86, 101, 1)",
                      marginRight: "10px",
                    }}
                  >
                    Easy Use
                  </Typography>
                </Box>
                {/* Out of box */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    padding: "10px",
                    borderRadius: "12px",
                    marginBottom: "20px",
                  }}
                >
                  <CheckCircleRoundedIcon
                    sx={{ color: "rgba(8, 85, 161, 1)" }}
                  />
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: "Inter",
                      fontSize: "16px",
                      fontWeight: 400,
                      lineHeight: "24px",
                      letterSpacing: "0em",
                      textAlign: "left",
                      color: "rgba(75, 86, 101, 1)",
                      marginRight: "10px",
                    }}
                  >
                    Out of box
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    padding: "10px",
                    borderRadius: "12px",
                    marginBottom: "20px",
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: "Inter",
                      fontSize: "16px",
                      fontWeight: 400,
                      lineHeight: "24px",
                      letterSpacing: "0em",
                      textAlign: "left",
                      color: "rgba(27, 136, 244, 1)",
                      marginLeft: "-12.5%",
                    }}
                  >
                    Show more
                  </Typography>
                  <KeyboardArrowDownIcon
                    sx={{
                      color: "rgba(27, 136, 244, 1)",
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Third part of the row */}
      <Box
        sx={{
          width: "25%",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          position: "relative",
        }}
      >
        {/* Rectangle with content */}
        <Box
          sx={{
            width: "135px",
            height: "118px",
            borderRadius: "0px 0px 12px 12px",
            backgroundColor: "rgba(243, 249, 255, 1)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            padding: "10px",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Inter",
              fontSize: "32px",
              fontWeight: 400,
              lineHeight: "48px",
              letterSpacing: "0em",
              textAlign: "left",
              color: "rgba(7, 71, 134, 1)",
              borderRadius: "12px",
              padding: "5px",
            }}
          >
            9.1
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Inter",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "20px",
              letterSpacing: "0em",
              textAlign: "center",
              color: "rgba(7, 71, 134, 1)",
              borderRadius: "12px",
              padding: "5px",
            }}
          >
            Very Good
          </Typography>
          <Box sx={{ display: "flex", gap: "2px" }}>
            <StarRoundedIcon sx={{ fontSize: "20px", color: "gold" }} />
            <StarRoundedIcon sx={{ fontSize: "20px", color: "gold" }} />
            <StarRoundedIcon sx={{ fontSize: "20px", color: "gold" }} />
            <StarRoundedIcon sx={{ fontSize: "20px", color: "gold" }} />
            <StarOutlineRoundedIcon sx={{ fontSize: "20px", color: "gold" }} />
          </Box>
        </Box>
        {/* View button */}
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{
            width: "232px",
            height: "48px",
            borderRadius: "12px",
            position: "absolute",
            bottom: "10px",
            left: "50%",
            transform: "translateX(-50%)",
            marginBottom: "-110%",
            textTransform: 'none', 
          }}
        >
          View
        </Button>
      </Box>
    </Box>
  );
};

export default Box4;
