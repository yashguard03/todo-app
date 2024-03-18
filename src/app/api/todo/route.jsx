const { NextResponse, NextRequest } = require("next/server");

export const GET = () => {
  return NextResponse.json({
    success: true,
    message: "Welcome to the todo page",
  });
};

export const POST = async (req) => {
  const { taskName } = await req.json();
  return NextResponse.json({
    success: true,
    message: "Task has been created successfully",
    task: taskName,
  });
};
