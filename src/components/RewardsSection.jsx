import { Box, Card, Typography, Stack, Avatar } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LockIcon from "@mui/icons-material/Lock";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CheckIcon from "@mui/icons-material/Check";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import crownSVG from "../assets/crown.svg";

const rewards = [
  { title: "Headphone", customersRequired: 100, icon: "🎧" },
  { title: "Smart Watch", customersRequired: 500, icon: "⌚" },
  { title: "AirPods", customersRequired: 1000, icon: "🎧" },
  { title: "Android Phone", customersRequired: 2000, icon: "📱" },
  { title: "Laptop", customersRequired: 10000, icon: "💻" },
];

const RewardsSection = ({ totalCustomers }) => {
  return (
    <Card sx={{ p: 2, borderRadius: 3, width: "350px" }}>
      <Typography fontWeight={600} mb={2}>
        Rewards
      </Typography>

      <Stack spacing={2} position="relative" sx={{ mt: -2 }}>
        <Box
          sx={{
            position: "absolute",
            left: 12,
            top: 16,
            bottom: 0,
            width: "4px",
            bgcolor: "#ffb638e8",
            height: "20px",
          }}
        />

        {rewards.map((reward, index) => {
          const achieved = totalCustomers >= reward.customersRequired;
          const nextAchieved =
            rewards[index + 1] &&
            totalCustomers >= rewards[index + 1].customersRequired;

          return (
            <Stack
              key={index}
              direction="row"
              spacing={2}
              alignItems="flex-start"
            >
              {/* Timeline Column */}
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                minWidth={28}
              >
                {/* Dot / Tick / Crown */}
                <Box
                  sx={{
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    bgcolor: achieved ? "#ffb638e8" : "#fdebd7",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mt: 2.5,
                    zIndex: 2,
                  }}
                >
                  {index === rewards.length - 1 ? (
                    <img src={crownSVG} height={"15px"} />
                  ) : achieved ? (
                    <CheckIcon sx={{ fontSize: 14, color: "white" }} />
                  ) : null}
                </Box>

                {/* Connector */}
                {index !== rewards.length - 1 && (
                  <Box
                    sx={{
                      width: "4px",
                      height: "56px", // 👈 card height + visual gap
                      bgcolor: nextAchieved ? "#ffb638e8" : "#fdebd7",
                      mb: -5,
                    }}
                  />
                )}
              </Box>

              {/* Reward Card */}
              <Stack
                direction="row"
                alignItems="center"
                sx={{
                  background: achieved ? "linear-gradient(90deg, #ffb638e8 60%, #ffb638b0 90%, #ffb63890 100%)" : "#fdebd7",
                  borderRadius: 2,
                  width: "300px",
                  height: "60px",
                  px: 1,
                }}
              >
                <Avatar
                  sx={{
                    bgcolor: achieved ? "#ffb638e8" : "#fdebd7",
                    width: 44,
                    height: 44,
                  }}
                >
                  {reward.icon}
                </Avatar>

                <Box
                  flex={1}
                  ml={1}
                  display="flex"
                  flexDirection="column"
                  gap={0.2}
                >
                  <Typography fontWeight={500}>{reward.title}</Typography>

                  <Typography
                    component="span"
                    sx={{
                      backgroundColor: "#ffffff8d",
                      borderRadius: 4,
                      px: 1,
                      py: "2px",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "4px",
                      fontSize: "11px",
                      lineHeight: 1,
                      width: "fit-content",
                    }}
                  >
                    <PersonOutlineIcon sx={{ fontSize: 14 }} />
                    {reward.customersRequired} Customers
                  </Typography>
                </Box>

                {achieved && (
                  <CheckCircleIcon
                    sx={{ color: "white", mr: 1, fontSize: 26 }}
                  />
                )}
              </Stack>
            </Stack>
          );
        })}
      </Stack>
    </Card>
  );
};

export default RewardsSection;
