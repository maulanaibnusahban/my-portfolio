"use client";
import { useState, useEffect } from "react";

// Mendefinisikan interface untuk props
interface CursorProps {
  color_rgb: string; // Properti color_rgb bertipe string
}

function Cursor({ color_rgb }: CursorProps) {
  // State untuk mengecek apakah layarnya adalah layar mobile atau bukan
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // useEffect ini dipakai untuk mengecek ukuran layar
  useEffect(() => {
    // Fungsi untuk mengecek apakah ukuran layar lebih kecil atau sama dengan 639px (ukuran mobile)
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 639); // Jika layar kecil, `isMobile` jadi true
    };

    checkScreenSize(); // Mengecek ukuran layar saat komponen pertama kali muncul

    // Jika ukuran layar berubah, fungsi ini akan dipanggil lagi
    window.addEventListener("resize", checkScreenSize);

    // Ketika komponen tidak lagi digunakan, event listener ini dihapus
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // useEffect ini digunakan untuk membuat elemen kursor mengikuti gerakan mouse
  useEffect(() => {
    if (!isMobile) {
      // Fungsi untuk memindahkan kursor sesuai posisi mouse
      const moveCursor = (e: MouseEvent) => {
        // Mengambil elemen kursor menggunakan getElementById
        const cursorElement = document.getElementById("cursor2");
        if (cursorElement) {
          // Mengubah posisi elemen sesuai dengan posisi mouse
          cursorElement.style.left = `${e.clientX}px`; // Mengatur posisi X
          cursorElement.style.top = `${e.clientY + 20}px`; // Mengatur posisi Y dengan offset 20px
        }
      };

      // Menambahkan event listener untuk gerakan mouse
      window.addEventListener("mousemove", moveCursor);

      // Menghapus event listener saat komponen tidak lagi digunakan
      return () => {
        window.removeEventListener("mousemove", moveCursor);
      };
    }
  }, [isMobile]); // Efek ini akan dijalankan ulang saat ukuran layar berubah

  return (
    <>
      {/* Elemen kursor hanya muncul jika layarnya bukan mobile */}
      {!isMobile && (
        <span
          id="cursor2" // Memberikan ID pada elemen supaya bisa diakses dengan getElementById
          style={{
            position: "fixed", // Tetap di tempat meski halaman di-scroll
            left: 0,
            zIndex: -1,
            top: 0,
            height: "120px", // Ukuran kursor
            width: "120px",
            borderRadius: "50%", // Bentuk lingkaran
            backgroundColor: `rgba(${color_rgb}, 0.5)`, // Warna transparan
            pointerEvents: "none", // Tidak mengganggu interaksi pengguna
            transform: "translate(-50%, -50%)", // Memusatkan kursor di tengah posisi mouse
            filter: "blur(15px)", // Efek blur
            transition: "transform 0.5s ease-in", // Transisi halus
          }}
        />
      )}
    </>
  );
}

export default Cursor;
