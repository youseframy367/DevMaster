"use client";

import { useState } from "react";
import Footer from "../partes/fotter";
import { apiUrl } from "../lib/api";

// غيّر الرابط حسب الـ endpoint عندك
const API_URL = apiUrl("/service-requests");

const balls = [
  { side: "right", top: "100px" },
  { side: "left", top: "400px" },
  { side: "right", top: "700px" },
];

const initialForm = {
  name: "",
  companyName: "",
  email: "",
  phoneNumber: "",
  message: "",
};

export default function Consultation() {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // { type: "success" | "error", text: string }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    setLoading(true);

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          companyName: form.companyName.trim(),
          email: form.email.trim(),
          phoneNumber: form.phoneNumber.trim(),
          message: form.message.trim(),
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        const msg = Array.isArray(data?.message)
          ? data.message.join(" - ")
          : data?.message || "Something went wrong, please try again";
        throw new Error(msg);
      }

      setStatus({ type: "success", text: "Your request has been sent successfully" });
      setForm(initialForm);
    } catch (err) {
      setStatus({ type: "error", text: err.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      {balls.map((ball, index) => (
        <div
          key={index}
          className="ball"
          style={{ [ball.side]: "-10%", top: ball.top }}
        />
      ))}

      <div className="content">
        <div className="head" data-aos="fade-up">
          <h1 className="title">Free Consultation</h1>
          <p className="subtitle">
            Start your free consultation now and learn more about creating your
            website or your own digital marketing strategy
          </p>
        </div>

        <form className="form-box" onSubmit={handleSubmit} data-aos="fade-up">
          <div className="row">
            <div className="field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="field">
              <label htmlFor="companyName">Company Name</label>
              <input
                id="companyName"
                name="companyName"
                type="text"
                placeholder="Enter company name"
                value={form.companyName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="row">
            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="field">
              <label htmlFor="phoneNumber">Mobile Number</label>
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                placeholder="Enter phone number"
                value={form.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter Message Content"
              rows={10}
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>

          {status && (
            <p className={`status ${status.type}`} role="alert">
              {status.text}
            </p>
          )}

          <div className="gradient-btn">
            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "send"}
              {!loading && <img src="/icon/uil_arrow-up(2).png" alt="" />}
            </button>
          </div>
        </form>

        <div className="footer-wrap" data-aos="fade-up">
          <Footer top={false} />
        </div>
      </div>

      <style jsx>{`
        .page {
          background: black;
          width: 100%;
          min-height: 100vh;
          position: absolute;
          top: 0;
          left: 0;
          padding-top: 150px;
          color: #fff;
          font-family: "Inter", sans-serif;
          overflow-x: hidden;
        }

        .ball {
          position: absolute;
          width: 640px;
          height: 287px;
          border-radius: 50%;
          background: #504cff33;
          filter: blur(40px);
          opacity: 0.6;
          z-index: 0;
          pointer-events: none;
        }

        .content {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 30px;
          width: 100%;
        }

        .head {
          width: 80%;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .title {
          margin: 0;
          font-size: clamp(28px, 5vw, 42px);
          font-weight: 400;
          background-image: linear-gradient(
            270deg,
            #9795ff,
            #ffffff,
            #ffffff,
            #be9fff
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          width: fit-content;
        }

        .subtitle {
          margin: 0;
          font-weight: 400;
          line-height: 1.6;
        }

        .form-box {
          width: 80%;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          border: solid 1px #01c5ff;
          border-radius: 20px;
          box-sizing: border-box;
          background: rgba(0, 0, 0, 0.4);
        }

        .row {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          width: 100%;
        }

        .field {
          display: flex;
          flex-direction: column;
          gap: 10px;
          flex: 1 1 260px;
          min-width: 0;
        }

        label {
          font-weight: 500;
        }

        input,
        textarea {
          background: transparent;
          padding: 12px;
          border: solid 1px #f6f6f680;
          color: #fff;
          border-radius: 12px;
          width: 100%;
          box-sizing: border-box;
          font-family: inherit;
          font-size: 15px;
          outline: none;
          transition: border-color 0.2s;
        }

        input:focus,
        textarea:focus {
          border-color: #01c5ff;
        }

        textarea {
          resize: vertical;
        }

        .status {
          margin: 0;
          padding: 10px 14px;
          border-radius: 10px;
          font-size: 14px;
        }

        .status.success {
          background: rgba(0, 200, 120, 0.15);
          border: 1px solid #00c878;
        }

        .status.error {
          background: rgba(255, 70, 70, 0.15);
          border: 1px solid #ff4646;
        }

        .gradient-btn {
          position: relative;
          border-radius: 40px;
          padding: 2px;
          width: fit-content;
          background: linear-gradient(90deg, #00f2fe, #003cbe, #00f2fe);
          background-size: 200% 200%;
          animation: gradientShift 3s ease infinite;
        }

        .gradient-btn button {
          padding: 14px 24px;
          min-width: 115px;
          border-radius: 40px;
          background: black;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          gap: 5px;
          font-weight: 500;
          border: none;
          outline: none;
          cursor: pointer;
        }

        .gradient-btn button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .footer-wrap {
          width: 100%;
        }

        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        /* Tablet */
        @media (max-width: 900px) {
          .head,
          .form-box {
            width: 90%;
          }
        }

        /* Mobile */
        @media (max-width: 600px) {
          .page {
            padding-top: 110px;
          }

          .head,
          .form-box {
            width: 92%;
          }

          .form-box {
            padding: 16px;
            gap: 16px;
          }

          .row {
            gap: 16px;
          }

          .ball {
            width: 360px;
            height: 200px;
          }

          .gradient-btn,
          .gradient-btn button {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}