export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // API health check
    if (url.pathname === "/api/health") {
      return Response.json({
        success: true,
        message: "High Earn Verification Backend is Running"
      });
    }

    // Serve website files
    if (env.ASSETS) {
      return env.ASSETS.fetch(request);
    }

    return new Response("High Earn Verification Worker is running.");
  }
};
