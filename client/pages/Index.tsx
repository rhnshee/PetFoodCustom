import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Checkbox } from "../components/ui/checkbox";
import { Label } from "../components/ui/label";

export default function Index() {
  const navigate = useNavigate();
  const [rememberMe, setRememberMe] = useState(false);
  const [loginForm, setLoginForm] = useState({ username: "", password: "" });
  const [signupForm, setSignupForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/onboarding");
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/onboarding");
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-teal-100 p-6 overflow-hidden">
      {/* Floating pawprints background */}
      <div className="absolute top-10 left-6 text-6xl opacity-10 animate-bounce-slow">🐾</div>
      <div className="absolute bottom-14 right-10 text-7xl opacity-10 animate-pulse">🐾</div>
      <div className="absolute top-1/3 right-1/4 text-5xl opacity-5 animate-bounce">🐾</div>

      {/* Main container */}
      <div className="w-full max-w-6xl flex rounded-[2rem] shadow-2xl overflow-hidden backdrop-blur-xl bg-white/90 border border-gray-100">
        {/* Left side - Puppies Image */}
        <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-blue-200 to-teal-200 p-8 items-center justify-center relative">
          <div className="text-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F76bd3aeafd05477da53fceca5191bd57%2Ff79ecfb64c7a49bfb9bb5bc58a372675"
              alt="Two adorable puppies eating from pet food bowls"
              className="w-full max-w-md rounded-3xl shadow-xl mb-6 border-4 border-white"
            />
            <div className="text-blue-900">
              <h2 className="text-3xl font-extrabold mb-2 drop-shadow-md">
                Welcome to PetFoodCustom
              </h2>
              <p className="text-lg font-medium opacity-90">
                Nutritious meals crafted with love 🐶🐱
              </p>
            </div>
          </div>
        </div>

        {/* Right side - Auth Forms */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex items-center justify-center">
          <div className="w-full max-w-md">
            {/* Logo */}
            <div className="text-center mb-8">
              <div className="relative inline-block">
                <div className="absolute -inset-5 bg-gradient-to-r from-blue-200 to-teal-200 rounded-full blur-2xl opacity-50"></div>
                <img
                  src="./images/logo.png"
                  alt="PetFoodCustom Logo"
                  className="w-28 relative z-10 mx-auto"
                />
              </div>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6 rounded-2xl bg-gray-100 p-1">
                <TabsTrigger
                  value="login"
                  className="text-sm font-semibold rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-lg"
                >
                  Login
                </TabsTrigger>
                <TabsTrigger
                  value="signup"
                  className="text-sm font-semibold rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-lg"
                >
                  Sign Up
                </TabsTrigger>
              </TabsList>

              {/* Login */}
              <TabsContent value="login">
                <Card className="border-0 shadow-none bg-transparent">
                  <CardHeader className="text-center px-0 pb-6">
                    <CardTitle className="text-3xl font-bold text-gray-800">
                      Welcome Back
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      Sign in and continue your pet’s journey
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="px-0">
                    <form onSubmit={handleLogin} className="space-y-5">
                      <Input
                        type="text"
                        placeholder="Username"
                        value={loginForm.username}
                        onChange={(e) =>
                          setLoginForm({ ...loginForm, username: e.target.value })
                        }
                        className="h-12 rounded-2xl border-gray-200 focus:border-teal-400 focus:ring-blue-300"
                      />
                      <Input
                        type="password"
                        placeholder="Password"
                        value={loginForm.password}
                        onChange={(e) =>
                          setLoginForm({ ...loginForm, password: e.target.value })
                        }
                        className="h-12 rounded-2xl border-gray-200 focus:border-teal-400 focus:ring-blue-300"
                      />

                      <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center space-x-2 text-gray-600">
                          <Checkbox
                            checked={rememberMe}
                            onCheckedChange={(c) => setRememberMe(c as boolean)}
                          />
                          <span>Remember me</span>
                        </label>
                        <button
                          type="button"
                          className="text-blue-600 hover:text-blue-700 font-medium"
                        >
                          Forgot password?
                        </button>
                      </div>

                      <Button
                        type="submit"
                        className="w-full h-12 bg-gradient-to-r from-blue-500 to-teal-400 hover:opacity-90 text-white font-semibold text-base rounded-2xl shadow-lg"
                      >
                        Login
                      </Button>
                    </form>

                    {/* Divider */}
                    <div className="flex items-center my-6">
                      <div className="flex-grow border-t border-gray-300"></div>
                      <span className="mx-4 text-gray-500 text-sm">or continue with</span>
                      <div className="flex-grow border-t border-gray-300"></div>
                    </div>

                    {/* Social Login */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button
                        type="button"
                        variant="outline"
                        className="flex-1 flex items-center justify-center gap-2 rounded-2xl border-gray-300 hover:bg-gray-50"
                      >
                        <img
                          src="https://www.svgrepo.com/show/475656/google-color.svg"
                          alt="Google"
                          className="w-5 h-5"
                        />
                        Google
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        className="flex-1 flex items-center justify-center gap-2 rounded-2xl border-gray-300 hover:bg-gray-50"
                      >
                        <img
                          src="https://www.svgrepo.com/show/475647/facebook-color.svg"
                          alt="Facebook"
                          className="w-5 h-5"
                        />
                        Facebook
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Signup */}
              <TabsContent value="signup">
                <Card className="border-0 shadow-none bg-transparent">
                  <CardHeader className="text-center px-0 pb-6">
                    <CardTitle className="text-3xl font-bold text-gray-800">
                      Create Account
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      Join us and start customizing meals
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="px-0">
                    <form onSubmit={handleSignup} className="space-y-5">
                      <Input
                        type="text"
                        placeholder="Username"
                        value={signupForm.username}
                        onChange={(e) =>
                          setSignupForm({ ...signupForm, username: e.target.value })
                        }
                        className="h-12 rounded-2xl border-gray-200 focus:border-teal-400 focus:ring-blue-300"
                      />
                      <Input
                        type="email"
                        placeholder="Email"
                        value={signupForm.email}
                        onChange={(e) =>
                          setSignupForm({ ...signupForm, email: e.target.value })
                        }
                        className="h-12 rounded-2xl border-gray-200 focus:border-teal-400 focus:ring-blue-300"
                      />
                      <Input
                        type="password"
                        placeholder="Password"
                        value={signupForm.password}
                        onChange={(e) =>
                          setSignupForm({ ...signupForm, password: e.target.value })
                        }
                        className="h-12 rounded-2xl border-gray-200 focus:border-teal-400 focus:ring-blue-300"
                      />
                      <Input
                        type="password"
                        placeholder="Confirm Password"
                        value={signupForm.confirmPassword}
                        onChange={(e) =>
                          setSignupForm({
                            ...signupForm,
                            confirmPassword: e.target.value,
                          })
                        }
                        className="h-12 rounded-2xl border-gray-200 focus:border-teal-400 focus:ring-blue-300"
                      />

                      <Button
                        type="submit"
                        className="w-full h-12 bg-gradient-to-r from-blue-500 to-teal-400 hover:opacity-90 text-white font-semibold text-base rounded-2xl shadow-lg"
                      >
                        Sign Up
                      </Button>
                    </form>

                    {/* Divider */}
                    <div className="flex items-center my-6">
                      <div className="flex-grow border-t border-gray-300"></div>
                      <span className="mx-4 text-gray-500 text-sm">or sign up with</span>
                      <div className="flex-grow border-t border-gray-300"></div>
                    </div>

                    {/* Social Signup */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button
                        type="button"
                        variant="outline"
                        className="flex-1 flex items-center justify-center gap-2 rounded-2xl border-gray-300 hover:bg-gray-50"
                      >
                        <img
                          src="https://www.svgrepo.com/show/475656/google-color.svg"
                          alt="Google"
                          className="w-5 h-5"
                        />
                        Google
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        className="flex-1 flex items-center justify-center gap-2 rounded-2xl border-gray-300 hover:bg-gray-50"
                      >
                        <img
                          src="https://www.svgrepo.com/show/475647/facebook-color.svg"
                          alt="Facebook"
                          className="w-5 h-5"
                        />
                        Facebook
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}

